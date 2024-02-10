

import { useEffect, useState } from 'react';
import axios from 'axios';
import'./product.css'
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
        <div className='body'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='container'>
                 <div className="">
                <div className="product-list row">
                {products.map(product => (
                  <div key={product._id} className="product-card col-lg-4 col-md-6 col-sm-12">
                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className='row'>
                    <p className='des col-8 '><span className='number'>{product.price}$</span>/night</p>
                    <p className='des col-2'><span>{product.beds}</span>beds</p>
                    <p className='des col-2'><span>{product.distance}</span>m</p>
          
                    </div>
                  </div>
                ))}
              </div>
              </div>
                
               </div>
            )}
        </div>
    );
};

export default ProductList;
