import React from 'react'

const ProductCard = ({ image, title, price, category}) => {
    return (
        <div className="relative w-60">
            <div className="flex justify-center h-40 pt-2">
                <img src={image} alt="" style={{width: "90px", height: "100px"}} />
            </div>
            <div className=" mx-6">
                <p className="text-green-300">{category}</p>
                <p className="text-sm line-clamp-2">{title}</p>
                <p className="absolute bottom-1 left-6 font-bold"><span className="text-xs">$</span>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard
