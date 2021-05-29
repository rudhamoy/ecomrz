import React from 'react'
import {MenuIcon, SearchIcon, HeartIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Menu = () => {
    return (
        <>
        <div className="flex justify-between sm:mx-48 text-white py-6">
        {/** Menu Left */}
            <div className="flex cursor-pointer">
                <h1>Logo</h1>
                <MenuIcon className="h-7 ml-5 " />
            </div>
        {/** Menu Search  */}
            <div className="w-3/4 mx-10"> 
                <div className="hidden sm:flex items-center rounded-sm bg-white h-8 text-black">
                    <input type="text" className="w-full h-full px-2 rounded-sm focus:outline-none" />
                    <SearchIcon className="h-7" />
                </div>
            </div>
        {/** Menu Right  */}
            <div className="flex justify-between w-1/5 cursor-pointer">
                <HeartIcon className="mr-6 sm:mr-0 h-7" />
                <ShoppingCartIcon className="mr-2 sm:mr-0 h-7" />
                <div className="flex">
                    <UserIcon className="hidden sm:block h-7" />
                    <p className="hidden sm:block">Sing In</p>
                </div>
            </div>
            </div>
            {/** MOBILE Menu Search  */}
            <div className="mx-5 pb-4"> 
                <div className="flex items-center rounded-md bg-white h-8 text-black sm:hidden">
                    <input type="text" className="w-full h-full px-2 rounded-md focus:outline-none" />
                    <SearchIcon className="h-5 mr-2" />
                </div>
            </div>
        </>
    )
}

export default Menu
