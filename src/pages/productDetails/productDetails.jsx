
import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import "./details.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndComments = async () => {
      try {
        // Fetch product details
        const productResponse = await axios.get(
          `http://localhost:4200/products/${id}`
        );
        setProduct(productResponse.data);

        // Fetch comments for the product
        const commentsResponse = await axios.get(
          `http://localhost:4200/products/${id}/comments`
        );
        setComments(commentsResponse.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductAndComments();

    return () => {};
  }, [id]);

  const handleCommentChange = (e) => {
    setNewCommentText(e.target.value);
  };

  const handleAddComment = async () => {
    try {
      // Optimistically add the new comment to the comments state
      const newComment = { text: newCommentText };
      setComments([...comments, newComment]);
      setNewCommentText(""); // Clear the textarea

      // Send the request to add the comment
      await axios.post(`http://localhost:4200/${id}/comments`, {
        text: newCommentText
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  const handleChange = (index) => {
    // Handle carousel change
  };

  return (
    <div className="body pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="product-image">
              <img src={product.thumbnail} alt="Product Thumbnail" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="des">
                Price: <span className="number">{product.price}$</span>/night
              </p>
              <h3>Comments</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
              </ul>
              <div className="comment-form">
                <textarea
                  value={newCommentText}
                  onChange={handleCommentChange}
                  placeholder="Enter your comment"
                ></textarea>
                <button onClick={handleAddComment}>Add Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
