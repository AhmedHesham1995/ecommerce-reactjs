
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    thumbnail: "",
    images: [],
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4200/products/add', productData);
      console.log(response.data); 
      setProductData({
        title: "",
        category: "",
        location: "",
        description: "",
        thumbnail: "",
        images: [],
        price: 0
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container-fluid"  style={{ backgroundColor: '#F6F6F6', minHeight: '100vh' }}>
      <div className="row  align-items-center px-5 pt-3">
        <div className="col-md-8">
          <h2 style={{marginBottom:"40px"}}>Add New Product</h2>
          <form onSubmit={handleSubmit} className='my-3'>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="title" className="form-label fw-bold">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={productData.title} onChange={handleChange} />
              </div>
              <div className="col">
                <label htmlFor="category" className="form-label fw-bold">Category:</label>
                <select className="form-select" id="category" name="category" value={productData.category} onChange={handleChange}>
                  <option value="" hidden></option>
                  <option value="flat">Flat</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label fw-bold">Location:</label>
              <input type="text" className="form-control" id="location" name="location" value={productData.location} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-bold">Description:</label>
              <textarea className="form-control" id="description" name="description" value={productData.description} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label fw-bold">Thumbnail URL:</label>
              <input type="text" className="form-control" id="thumbnail" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label fw-bold">Price:</label>
              <input type="number" className="form-control" id="price" name="price" value={productData.price} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#08BB6A', borderColor: '#08BB6A' }}>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
