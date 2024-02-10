// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     images: [],
//     price: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         title: "",
//         category: "",
//         location: "",
//         description: "",
//         thumbnail: "",
//         images: [],
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" value={productData.title} onChange={handleChange} />
//         </label>
//         <label>
//           Category:
//           <input type="text" name="category" value={productData.category} onChange={handleChange} />
//         </label>
//         <label>
//           Location:
//           <input type="text" name="location" value={productData.location} onChange={handleChange} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={productData.description} onChange={handleChange} />
//         </label>
//         <label>
//           Thumbnail URL:
//           <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </label>
//         <label>
//           Price:
//           <input type="number" name="price" value={productData.price} onChange={handleChange} />
//         </label>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;







// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     images: [],
//     price: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         title: "",
//         category: "",
//         location: "",
//         description: "",
//         thumbnail: "",
//         images: [],
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">Title:</label>
//           <input type="text" className="form-control" id="title" name="title" value={productData.title} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="category" className="form-label">Category:</label>
//           <input type="text" className="form-control" id="category" name="category" value={productData.category} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="location" className="form-label">Location:</label>
//           <input type="text" className="form-control" id="location" name="location" value={productData.location} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description:</label>
//           <textarea className="form-control" id="description" name="description" value={productData.description} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="thumbnail" className="form-label">Thumbnail URL:</label>
//           <input type="text" className="form-control" id="thumbnail" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">Price:</label>
//           <input type="number" className="form-control" id="price" name="price" value={productData.price} onChange={handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;









// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     images: [],
//     price: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         title: "",
//         category: "",
//         location: "",
//         description: "",
//         thumbnail: "",
//         images: [],
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" value={productData.title} onChange={handleChange} />
//         </label>
//         <label>
//           Category:
//           <select name="category" value={productData.category} onChange={handleChange}>
//             <option value="" hidden>Select Category</option>
//             <option value="flat">Flat</option>
//             <option value="villa">Villa</option>
//             {/* Add more options as needed */}
//           </select>
//         </label>
//         <label>
//           Location:
//           <input type="text" name="location" value={productData.location} onChange={handleChange} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={productData.description} onChange={handleChange} />
//         </label>
//         <label>
//           Thumbnail URL:
//           <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </label>
//         <label>
//           Price:
//           <input type="number" name="price" value={productData.price} onChange={handleChange} />
//         </label>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;












// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     images: [],
//     price: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         title: "",
//         category: "",
//         location: "",
//         description: "",
//         thumbnail: "",
//         images: [],
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-4 mb-3">Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Title:</label>
//           <input type="text" className="form-control" name="title" value={productData.title} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Category:</label>
//           <select className="form-select" name="category" value={productData.category} onChange={handleChange}>
//             <option value="" hidden>Select Category</option>
//             <option value="flat">Flat</option>
//             <option value="villa">Villa</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Location:</label>
//           <input type="text" className="form-control" name="location" value={productData.location} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Description:</label>
//           <textarea className="form-control" name="description" value={productData.description} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Thumbnail URL:</label>
//           <input type="text" className="form-control" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Price:</label>
//           <input type="number" className="form-control" name="price" value={productData.price} onChange={handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;












// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     images: [],
//     price: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         title: "",
//         category: "",
//         location: "",
//         description: "",
//         thumbnail: "",
//         images: [],
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-4 mb-3">Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Title:</label>
//             <input type="text" className="form-control" name="title" value={productData.title} onChange={handleChange} />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Category:</label>
//             <select className="form-select" name="category" value={productData.category} onChange={handleChange}>
//               <option value="" hidden>Select Category</option>
//               <option value="flat">Flat</option>
//               <option value="villa">Villa</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Location:</label>
//           <input type="text" className="form-control" name="location" value={productData.location} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Description:</label>
//           <textarea className="form-control" name="description" value={productData.description} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Thumbnail URL:</label>
//           <input type="text" className="form-control" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Price:</label>
//           <input type="number" className="form-control" name="price" value={productData.price} onChange={handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;






// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     images: [],
//     price: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         title: "",
//         category: "",
//         location: "",
//         description: "",
//         thumbnail: "",
//         images: [],
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div className="container-fluid"  style={{ backgroundColor: '#F6F6F6', minHeight: '100vh' }}>
//       <div className="row  align-items-center p-5">
//         <div className="col-md-8">
//           <h2>Add New Product</h2>
//           <form onSubmit={handleSubmit} className='my-3'>
//             <div className="row mb-3">
//               <div className="col">
//                 <label htmlFor="title" className="form-label">Title:</label>
//                 <input type="text" className="form-control" id="title" name="title" value={productData.title} onChange={handleChange} />
//               </div>
//               <div className="col">
//                 <label htmlFor="category" className="form-label">Category:</label>
//                 <select className="form-select" id="category" name="category" value={productData.category} onChange={handleChange}>
//                   <option value="" hidden></option>
//                   <option value="flat">Flat</option>
//                   <option value="villa">Villa</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="location" className="form-label">Location:</label>
//               <input type="text" className="form-control" id="location" name="location" value={productData.location} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="description" className="form-label">Description:</label>
//               <textarea className="form-control" id="description" name="description" value={productData.description} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="thumbnail" className="form-label">Thumbnail URL:</label>
//               <input type="text" className="form-control" id="thumbnail" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="price" className="form-label">Price:</label>
//               <input type="number" className="form-control" id="price" name="price" value={productData.price} onChange={handleChange} />
//             </div>
//             <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#08BB6A', borderColor: '#08BB6A' }}>Add Product</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;










import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
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
      console.log(response.data); // Log the response from the backend
      // Optionally, you can reset the form after successful submission
      setProductData({
        title: "",
        category: "",
        location: "",
        description: "",
        thumbnail: "",
        images: [],
        price: 0
      });
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
                  {/* Add more options as needed */}
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
