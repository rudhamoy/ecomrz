import React from 'react'

const NewsLetter = () => {
    return (
        <div className="bg-gray-200 text-center py-20">
            <div className="flex flex-col justify-center items-center mt-12">
                <h2 className="font-bold">JOIN OUR NEWSLETTER</h2>
            <p className="text-gray-600 text-sm">Subscribe our newsletter to receive the lastest news and exclusive offers ervey week</p>
            
            <div className="mt-6"> 
                <div className="flex items-center rounded-sm bg-white h-8 text-black">
                    <input type="text" placeholder="Enter your email" className="w-full h-full px-2 rounded-sm focus:outline-none" />
                    <button style={{backgroundColor: "#fa4f91"}} className="px-2 text-white h-full items-center">Subscribe</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NewsLetter
