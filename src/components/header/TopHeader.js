import React from 'react'

const TopHeader = () => {
    return (
        <div className="hidden mx-48 sm:flex justify-between text-gray-400">
            {/** Top Header Left */}
            <div className="w-1/4 cursor-pointer">
                <p>+91 234567890</p>
            </div>

            {/** Top Header Right */}
            <div className="flex justify-between w-1/2 cursor-pointer">
            <p>Gift Cards</p>
            <p>Today's Deal</p>
            <p>Help</p>
            <p>Track Your Order</p>
            </div>
        </div>
    )
}

export default TopHeader
