import React, { useState, useEffect } from 'react';
import ProductListContainer from './ProductListContainer'
import axios from 'axios'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])
    const [products3, setProducts3] = useState([])

    const fetchProducts = async () => {
        const {data } = await axios.get('https://fakestoreapi.com/products?limit=3')
        setProducts(data)
    }
    const fetchProducts2 = async () => {
        const {data } = await axios.get('https://fakestoreapi.com/products/category/electronics?limit=3')
        setProducts2(data)
    }
    const fetchProducts3 = async () => {
        const {data } = await axios.get('https://fakestoreapi.com/products/category/jewelery?limit=3')
        setProducts3(data)
    }

    useEffect(() => {
        fetchProducts()
        fetchProducts2()
        fetchProducts3()
    }, [])

    return (
        <div className="hidden sm:block -mt-16">
            <ProductListContainer title="Lastest Products" btnTitle="View More" products={products} />
            <ProductListContainer title="Deals of the Day" btnTitle="See all Deals" products={products2} />
            <ProductListContainer title="Offers for you" btnTitle="View More" products={products3} />
        </div>
    )
}

export default ProductList;
