import React from 'react'
import ProductCard from './ProductCard'

const ProductListContainer = ({title, btnTitle, products}) => {

    return (
        <div className="flex h-72 shadow-lg bg-white mx-48 mb-20">
        {/**  TITLE */}
            <div className="w-1/5 border-r flex flex-col justify-center items-center">
                <h2 className="text-3xl text-center mb-6 text-gray-600 w-4/5">{title}</h2>
                <button style={{backgroundColor: "#19c144"}} className="text-sm px-3 py-2 text-white">{btnTitle}</button>
            </div>

            {/** Product List */}

            <div className="w-4/5 flex justify-evenly overflow-hidden">
                {products.map(product => (
                    <ProductCard id={product.id} image={product.image} title={product.title} category={product.category} price={product.price} />
                ))}
            </div>
        </div>
    )
}

export default ProductListContainer
