// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProductForm = () => {
//   const [productData, setProductData] = useState({
//     en: '',
//     ar: '',
//     thumbnail: '',
//     images: [],
//     price: 0,
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
//         en: '',
//         ar: '',
//         thumbnail: '',
//         images: [],
//         price: 0,
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
//           English Title:
//           <input type="text" name="en" value={productData.en} onChange={handleChange} />
//         </label>
//         <label>
//           Arabic Title:
//           <input type="text" name="ar" value={productData.ar} onChange={handleChange} />
//         </label>
//         <label>
//           Thumbnail URL:
//           <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </label>
//         {/* Add more fields for images, price, etc. */}
//         <label>
//           Price:
//           <input type="number" name="price" value={productData.price} onChange={handleChange} />
//         </label>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddProductForm = () => {
//   const [productData, setProductData] = useState({
//     en: '',
//     ar: '',
//     thumbnail: '',
//     images: [],
//     price: 0,
//   });

//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     // Fetch products when the component mounts
//     fetchProducts();
    
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4200/products');
//       setProducts(response.data);
//       console.log(response.data);
//     //   console.log(products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

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
//         en: '',
//         ar: '',
//         thumbnail: '',
//         images: [],
//         price: 0,
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
//           English Title:
//           <input type="text" name="en" value={productData.en} onChange={handleChange} />
//         </label>
//         <label>
//           Arabic Title:
//           <input type="text" name="ar" value={productData.ar} onChange={handleChange} />
//         </label>
//         <label>
//           Thumbnail URL:
//           <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </label>
//         {/* Add more fields for images, price, etc. */}
//         <label>
//           Price:
//           <input type="number" name="price" value={productData.price} onChange={handleChange} />
//         </label>
//         <button type="submit">Add Product</button>
//       </form>
//       <h2>All Products</h2>
//       <ul>
//         {products && products.map((product, index) => (
//           <li key={index}>{product.en.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AddProductForm;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddProductForm = () => {
//   const [productData, setProductData] = useState({
//     en: {title:"",description:""},
//     ar: {title:"",description:""},
//     thumbnail: '',
//     images: [],
//     price: 0,
//     category:""
//   });

//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     // Fetch products when the component mounts
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4200/products');
//       setProducts(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProductData({ ...productData, [name]: value });
// //   };

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "en" || name === "ar") {
//       const lang = name;
//       const updatedData = { ...productData[lang], title: value };
//       setProductData({ ...productData, [lang]: updatedData });
//     } else {
//       setProductData({ ...productData, [name]: value });
//     }
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         en: {title:"",description:""},
//         ar: {title:"",description:""},
//         thumbnail: '',
//         images: [],
//         price: 0,
//         category:""
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
//           English Title:
//           <input type="text" name="en" value={productData.en.title} onChange={handleChange} />
//         </label>
//         <label>
//           Arabic Title:
//           <input type="text" name="ar" value={productData.ar.title} onChange={handleChange} />
//         </label>
//         <label>
//           Thumbnail URL:
//           <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
//         </label>
//         {/* Add more fields for images, price, etc. */}
//         <label>
//           Price:
//           <input type="number" name="price" value={productData.price} onChange={handleChange} />
//         </label>
//         <button type="submit">Add Product</button>
//       </form>
//       <h2>All Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <div>Title (English): {product.en && product.en.title}</div>
//             <div>Title (Arabic): {product.ar && product.ar.title}</div>
//             <div>category: {product.category}</div>
//             <div>Thumbnail: <img src={product.thumbnail} alt="Thumbnail" /></div>
//             {/* Add more fields as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AddProductForm;








import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    en: { title: "", description: "" },
    ar: { title: "", description: "" },
    thumbnail: '',
    images: [],
    price: 0,
    category: ''
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4200/products');
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "en" || name === "ar") {
//       const lang = name;
//       const updatedData = { ...productData[lang], title: value };
//       setProductData({ ...productData, [lang]: updatedData });
//     } else {
//       setProductData({ ...productData, [name]: value });
//     }
//   };

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "en" || name === "ar") {
//       const lang = name;
//       const updatedData = { ...productData[lang], title: value };
//       setProductData({ ...productData, [lang]: updatedData });
//     } else {
//       setProductData({ ...productData, [name]: value });
//     }
//   };

const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "en" || name === "ar") {
      const lang = name;
      const updatedData = { ...productData[lang], title: value };
      setProductData({ ...productData, [lang]: updatedData });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };
  
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         en: { title: "", description: "" },
//         ar: { title: "", description: "" },
//         thumbnail: '',
//         images: [],
//         price: 0,
//         category: ''
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const productWithCategory = { ...productData, category: productData.category };
//       const response = await axios.post('http://localhost:4200/products/add', productWithCategory);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         en: { title: "", description: "" },
//         ar: { title: "", description: "" },
//         thumbnail: '',
//         images: [],
//         price: 0,
//         category: ""
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4200/products/add', productData);
//       console.log(response.data); // Log the response from the backend
//       // Optionally, you can reset the form after successful submission
//       setProductData({
//         en: { title: "", description: "" },
//         ar: { title: "", description: "" },
//         thumbnail: '',
//         images: [],
//         price: 0,
//         category: "" // Resetting the category field
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4200/products/add', productData);
      console.log(response.data); // Log the response from the backend
      // Optionally, you can reset the form after successful submission
      setProductData({
        en: { title: "", description: "" },
        ar: { title: "", description: "" },
        thumbnail: '',
        images: [],
        price: 0,
        category: "" // Resetting the category field
      });
      // Fetch the updated list of products after adding a new product
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  
  

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          English Title:
          <input type="text" name="en" value={productData.en.title} onChange={handleChange} />
        </label>
        <label>
          Arabic Title:
          <input type="text" name="ar" value={productData.ar.title} onChange={handleChange} />
        </label>
        <label>
          Thumbnail URL:
          <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={productData.category} onChange={handleChange} />
        </label>
        {/* Add more fields for images, price, etc. */}
        <label>
          Price:
          <input type="number" name="price" value={productData.price} onChange={handleChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>Title (English): {product.en && product.en.title}</div>
            <div>Title (Arabic): {product.ar && product.ar.title}</div>
            <div>Category: {product.category}</div>
            <div>Thumbnail: <img src={product.thumbnail} alt="" /></div>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProductForm;
