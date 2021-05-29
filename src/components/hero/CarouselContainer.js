import React from 'react'

const CarouselContainer = ({image, category}) => {
    return (
        <div className="flex mx-20 h-60">
            <img src={image} alt=""  />
            <div>
                <h2>UPTO 40% OFF</h2>
                <h4>{category}</h4>
                <h2>WEEKEND SPECIAL SALE</h2>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CarouselContainer
