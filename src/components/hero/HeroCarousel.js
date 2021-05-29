import React, { useState, useEffect } from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios'
import CarouselContainer from './CarouselContainer'

const HeroCarousel = () => {
    const [product, setProduct] = useState([]);
    const [product2, setProduct2] = useState([]);
    const [product3, setProduct3] = useState([]);

    

    const fetchData1 = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/1')
    setProduct(data)
    }
    const fetchData2 = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/2')
    setProduct2(data)
    }
    const fetchData3 = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/3')
    setProduct3(data)
    }

    useEffect(() => {
        fetchData1()
        fetchData2()
        fetchData3()
    }, [])


    return (
        <div className="relative">
            <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <CarouselContainer image={product.image} category={product.category} />
                </div>

                <div>
                    <CarouselContainer image={product2.image} category={product.category} />
                </div>

                <div>
                    <CarouselContainer image={product3.image} category={product.category} />
                </div>
            </Carousel>
        </div>
    )
}

export default HeroCarousel
