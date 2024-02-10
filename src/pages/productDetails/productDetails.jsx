import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./details.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4200/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();

    return () => {};
  }, [id]);

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
          <div className="product-info ">
            <h2 className="">{product.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              necessitatibus molestiae recusandae laboriosam veniam, incidunt
              inventore ducimus blanditiis fugiat voluptas! Nisi hic illum iure
              unde nam reprehenderit autem obcaecati placeat.
            </p>
            <p className="des">
              price:<span className="number">{product.price}$</span>/night
            </p>
          </div>
        </div>
      </div>
  
    </div></div>
  );
};

export default ProductDetails;
