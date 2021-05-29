import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterDown from './FooterDown'

const FooterMain = () => {
    return (
        <div className="bg-gray-300 pt-16">
            <FooterTop />
            <FooterMiddle />
            <FooterDown />
        </div>
    )
}

export default FooterMain
