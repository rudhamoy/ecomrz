import React from 'react'

const ShopByDiscount = () => {
    return (
        <div className="mx-48 mb-10">
            <h2 className="text-center font-bold text-gray-600">Shop By Discount</h2>
            <div className="flex justify-between my-8">
                <div className="border-2 w-56 text-center py-6 cursor-pointer">
                    <p>Upto <span className="font-bold text-3xl">40%</span> Off</p>
                </div>
                <div className="border-2 w-56 text-center py-6 cursor-pointer">
                    <p>Upto <span className="font-bold text-3xl">50%</span> Off</p>
                </div>
                <div className="border-2 w-56 text-center py-6 cursor-pointer">
                    <p>Upto <span className="font-bold text-3xl">60%</span> Off</p>
                </div>
                <div className="border-2 w-56 text-center py-6 cursor-pointer">
                    <p>Upto <span className="font-bold text-3xl">80%</span> Off</p>
                </div>
            </div>
        </div>
    )
}

export default ShopByDiscount
