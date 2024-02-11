

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

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

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:4200/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const handleInputChange = async (e) => {
        const newSearchTerm = e.target.value.trim();
        setSearchTerm(newSearchTerm);
        try {
            if (newSearchTerm === '') {
                const response = await axios.get('http://localhost:4200/products');
                setProducts(response.data);
            } else {
                const response = await axios.post('http://localhost:4200/products/search', { title: newSearchTerm });
                if (response.data.length === 0) {
                    console.log('No matching products found');
                }
                setProducts(response.data);
            }
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    const handleCategoryChange = async (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        try {
            const response = await axios.post('http://localhost:4200/products/filterWithCat', { category });
            setProducts(response.data);
        } catch (error) {
            console.error('Error filtering products by category:', error);
        }
    };

    return (
        <div className='body pt-5'>
            <div className='d-flex justify-content-between px-5'>
                <div className='search-bar mb-3 col-5 me-2'>
                    <input
                        type='text'
                        placeholder='Search by title...'
                        value={searchTerm}
                        onChange={handleInputChange}
                        className='form-control search-input w-100'
                    />
                </div>
                <div className='category-filter col-5 mb-3'>
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className='form-control w-100'
                    >
                        <option hidden value=''>All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (

            <div className='container'>
            <div className="">
              <div className="product-list row">
                {products.map(product => (
                  <div key={product._id} className="product-card col-lg-4 col-md-6 col-sm-12">
                    <Link to={`/product/${product._id}`} className="product-link ">
                      <img src={product.thumbnail} alt={product.title} className="product-image" />
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <div className='row'>
                        <p className='des col-8 '><span className='number'>{product.price}$</span>/night</p>
                        <p className='des col-2'><span>{product.beds}</span>beds</p>
                        <p className='des col-2'><span>{product.distance}</span>m</p>
                      </div>
                    </Link>
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
