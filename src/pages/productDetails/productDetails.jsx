import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment,faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
        const productResponse = await axios.get(
          `http://localhost:4200/products/${id}`
        );
        setProduct(productResponse.data);

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
      const newComment = { text: newCommentText };
      setComments([...comments, newComment]);
      setNewCommentText(""); // Clear the textarea

      await axios.post(`http://localhost:4200/${id}/comments`, {
        text: newCommentText,
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="body pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="product-image">
              <img src={product.thumbnail} alt="Product Thumbnail" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-flex align-items-center">
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                fugit minima ea, reprehenderit nostrum repellendus laborum velit
                eum tempora magnam veniam soluta incidunt neque, nam ullam,
                voluptatibus voluptas exercitationem nobis?
              </p>
              <p className="des loc">
                <FontAwesomeIcon  icon={faLocationDot} />{product.location}
              </p>
              <p className="des">
                Price: <span className="number">{product.price}$</span>/night
              </p>
              
            </div>
          </div>
        </div>
        <div className="row mt-5 pb-3 my-3">
          <div className="col-12">
            <h2 className="text-center">Comments</h2>
            <div className="container ">
              <ul className="comment-list">
                {comments.map((comment, index) => (
                  <li key={index} className="comment-item">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="comment-icon"
                    />
                    {comment.text}
                  </li>
                ))}
              </ul>

              <div className="comment-form">
                <p className="comments">Leave your Comment</p>
                <input
                  value={newCommentText}
                  onChange={handleCommentChange}
                  placeholder="Enter your comment"
                  className=" col-8 styled-textarea me-2"
                ></input>
                <button
                  onClick={handleAddComment}
                  className=" btn btn-success  "
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
