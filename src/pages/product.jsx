// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4200/products');
//                 setProducts(response.data);
//                 console.log(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <h2>Products</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <ul>
//                     {Array.isArray(products) && products.map(product => (
//                         <li key={product._id}>
//                             <h3>{product.en.title}</h3>
//                             <p>{product.en.description}</p>
//                             <p>Price: ${product.price}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default ProductList;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         enTitle: '',
//         enDescription: '',
//         arTitle: '',
//         arDescription: '',
//         thumbnail: '',
//         images: ['', ''],
//         price: '',
//         beds: '',
//         distance: ''
//     });

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4200/products');
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//                 setLoading(false); // Update loading state even if there's an error
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Check if the enTitle field is filled
//         if (!formData.enTitle.trim()) {
//             console.error('English Title is required');
//             return; // Exit the function if enTitle is not filled
//         }
//         try {
//             const response = await axios.post('http://localhost:4200/products/add', formData);
//             console.log(response.data);
//             // Reset form fields after successful submission
//             setFormData({
//                 enTitle: '',
//                 enDescription: '',
//                 arTitle: '',
//                 arDescription: '',
//                 thumbnail: '',
//                 images: ['', ''],
//                 price: '',
//                 beds: '',
//                 distance: ''
//             });
//             // Optionally, you can update the products state to include the newly added product
//         } catch (error) {
//             console.error('Error adding product:', error);
//             // Optionally, you can display an error message to the user
//         }
//     };

//     return (
//         <div>
//             <h2>Products</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div>
//                     <ul>
//                         {Array.isArray(products) && products.map(product => (
//                             <li key={product._id}>
//                                 <h3>{product.en.title}</h3>
//                                 <p>{product.en.description}</p>
//                                 <p>Price: ${product.price}</p>
//                             </li>
//                         ))}
//                     </ul>
//                     <h2>Add New Product</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             English Title:
//                             <input
//                                 type="text"
//                                 name="enTitle"
//                                 value={formData.enTitle}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         {/* Add similar labels and inputs for other fields */}
//                         <button type="submit">Add Product</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AddProduct from './AddProduct'; // Import the AddProduct component

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4200/products');
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//                 setLoading(false); // Update loading state even if there's an error
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleProductAdded = () => {
//         // Function to handle product added event
//         // You can perform any additional actions here, such as refetching the products
//         console.log('Product added!');
//     };

//     return (
//         <div>
//             <h2>Products</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div>
//                     <ul>
//                         {Array.isArray(products) && products.map(product => (
//                             <li key={product._id}>
//                                 <h3>{product.en.title}</h3>
//                                 <p>{product.en.description}</p>
//                                 <p>Price: ${product.price}</p>
//                             </li>
//                         ))}
//                     </ul>
//                     <AddProduct onProductAdded={handleProductAdded} /> {/* Render the AddProduct component */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductList;
















import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4200/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product._id}>
                            <h3>{product.en.title}</h3>
                            <p>{product.en.description}</p>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
