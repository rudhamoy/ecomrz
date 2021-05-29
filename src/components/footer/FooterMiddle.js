import React from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'


const FooterMiddle = () => {
    return (
        <div className="mx-48 flex justify-between mt-16">
            <div>
                <h2>Payment</h2>
                <div className="flex mt-5">
                    <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/07/02/Pictures/_114c599e-bc25-11ea-8289-eb9e57c07d2f.png" alt="" className="h-8 w-12 mr-4"  />
                    <img src="https://lh3.googleusercontent.com/RkN2IcvWd4DWNTVbh8Ma2G77D42Gd5HP0Deydf9FmzbDUMxLNsmWUSE8k562PgEPKzmF_OGWIiySxhdLUdNcxJ3t8kc7JugTaAhHYA" alt="" className="h-8 w-12 mr-4"  />
                    <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/phonepe_505_050221042103.jpg" alt="" className="8 w-12 mr-4"  />
                    <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/08/rupay-card-1566468196.jpg" alt="" className="h-8 w-12 mr-4" />
                    <img src="https://miro.medium.com/max/2000/0*osYxGzp383mWcmTM.jpg" alt="" className="h-8 w-12 mr-4"  />
                </div>
            </div>
            <div className="text-left">
                <h2>Social Network</h2>
                <div className="flex text-2xl mt-5">
                    <FaFacebook className="mr-4" />
                    <FaInstagramSquare className="mr-4" />
                    <AiFillTwitterCircle className="mr-4" />
                    <FaYoutube className="mr-4" />
                    <FaWhatsapp className="mr-4" />
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle
