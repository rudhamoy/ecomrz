import React from 'react';
import TopHeader from './TopHeader'
import Menu from '../menu/Menu'
import BottomHeader from './BottomHeader'

const Header = () => {
    return (
        <>
        <div style={{backgroundColor: "#3a19b0"}} className="h-44 md:h-24">
            <TopHeader />
            <Menu />
            </div>
            <BottomHeader />
        </>
    )
}

export default Header
