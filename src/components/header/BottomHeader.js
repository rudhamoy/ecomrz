import React from 'react'
import { ArrowNarrowRightIcon, ChevronDownIcon, DotsHorizontalIcon } from '@heroicons/react/outline'

const BottomHeader = () => {
    return (
        <div className="hidden sm:flex justify-between mx-48 items-center py-1">
            <div className="flex items-center">
                <h2 className="font-bold text-sm">SEARCH BY CATEGORY</h2>
                <ArrowNarrowRightIcon className="h-6 font-light" />
            </div>

            {/** bottom header category lists */}
            <div className="flex justify-between w-4/5 text-xs">
               <div className="flex items-center cursor-pointer">
                <p>Appliances</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Electronics</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Mobile</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Computer</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Men</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Women</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Beauty</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>

               <div className="flex items-center cursor-pointer">
                <p>Fitness</p>
                <ChevronDownIcon className="h-4 ml-2" />
               </div>
               <div className="flex items-center cursor-pointer">
                <DotsHorizontalIcon className="h-4 ml-2" />
               </div>
            </div>
        </div>
    )
}

export default BottomHeader
