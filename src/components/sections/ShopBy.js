import React from 'react'
import {ImBooks} from 'react-icons/im'
import { FaChair } from "react-icons/fa"
import { MdLaptopMac } from "react-icons/md"
import { BiDumbbell } from "react-icons/bi"
import { GiAmericanFootballBall } from "react-icons/gi"
import { BsThreeDots } from "react-icons/bs"

const ShopBy = () => {
    return (
        <div className="mx-48 mb-10 text-gray-600">
            <h2 className="text-center font-bold">Shop By Categories</h2>
            <div className="flex justify-around my-8 text-3xl">
                <div className="flex flex-col items-center cursor-pointer">
                    <ImBooks />
                    <p className="text-sm mt-2">Books</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <FaChair />
                    <p className="text-sm mt-2">Furnitures</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <MdLaptopMac />
                    <p className="text-sm mt-2">Electronics</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <BiDumbbell />
                    <p className="text-sm mt-2">Fitness</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <GiAmericanFootballBall />
                    <p className="text-sm mt-2">Sports</p>
                </div>
                <div className="flex flex-col items-center">
                    <BsThreeDots />
                    <p className="text-sm mt-2">More</p>
                </div>
                
            </div>
        </div>
    )
}

export default ShopBy
