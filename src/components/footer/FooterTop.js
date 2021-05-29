import React from 'react'
import { ImMobile } from 'react-icons/im'
import { MdLocationOn, MdEmail } from 'react-icons/md'

const FooterTop = () => {
    return (
        <div className="mx-48 flex justify-between">
            <div className="text-gray-600 text-sm">
                <h2 className="font-bold text-base mb-4">About Us</h2>
                <p>About Us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Sitemap</p>
            </div>
            <div className="text-gray-600 text-sm">
                <h2 className="font-bold text-base mb-4">Shop Guide</h2>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Refund</p>
                <p>Security</p>
                <p>Report</p>
                <p>Terms of Condition</p>
            </div>
            <div className="text-gray-600 text-sm">
                <h2 className="font-bold text-base mb-4">Need Help ?</h2>
                <p>Customer Service</p>
                <p>FAQ</p>
                <p>Contact Us</p>
                <p>Shipping</p>
                <p>Payment</p>
            </div>
            <div className="text-gray-600 text-sm">
                <h2 className="font-bold text-base mb-3">Contact Details</h2>
                <div className="flex items-center mt-2">
                    <ImMobile />
                    <p className="ml-2">+ 91 9087654321</p>
                </div>
                <div className="flex items-center mt-2">
                    <MdEmail />
                    <p className="ml-2">yourhelphere@gmail.com</p>
                </div>
                <div className="flex items-center mt-2">
                    <MdLocationOn />
                    <p className="ml-2">21, VIP Road Agartala, Abhaynagar, Tripura, 799001</p>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
