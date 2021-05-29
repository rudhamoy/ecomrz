import React from 'react'
import { RiTruckLine } from 'react-icons/ri'
import { FaPiggyBank, FaHeadphones, FaRegCreditCard } from 'react-icons/fa'

const InfoSection = () => {
    return (
        <div className="relative mx-48 h-40 flex justify-between items-center bg-white shadow-lg -mb-20 z-40">
            <div className="text-center flex flex-col items-center px-8">
                <RiTruckLine className="text-4xl text-gray-600" />
                <h2 className="my-2">Free Shipping</h2>
                <p className="text-xs text-gray-600">Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
            <div className="text-center flex flex-col items-center border-l-2 px-8">
                <FaPiggyBank className="text-4xl text-gray-600" />
                <h2 className="my-2">Money Back Guarantee</h2>
                <p className="text-xs text-gray-600">Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
            <div className="text-center flex flex-col items-center border-l-2 px-8">
                <FaHeadphones className="text-4xl text-gray-600" />
                <h2 className="my-2">Online Support 24x7</h2>
                <p className="text-xs text-gray-600">Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
            <div className="text-center flex flex-col items-center border-l-2 px-8">
                <FaRegCreditCard className="text-4xl text-gray-600" />
                <h2 className="my-2">100% Secure Payement</h2>
                <p className="text-xs text-gray-600">Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
        </div>
    )
}

export default InfoSection
