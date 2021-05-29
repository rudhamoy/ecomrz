import React from 'react'

const Banners = () => {
    return (
        <div className="hidden sm:flex  justify-between mx-48 h-72 mb-20 overflow-hidden">
            <div className="w-2/4">
                <img src="https://image.freepik.com/free-vector/online-shopping-isometric-concept-illustration_88138-435.jpg" alt=""  />
                
            </div>
            
            <div className="w-1/5">
                <img src="https://previews.123rf.com/images/vanzyst/vanzyst1705/vanzyst170500109/79021962-minimal-geometric-poster-tamplate-in-flat-scandinavian-graphic-design-style.jpg" alt="" className="h-72" />
            </div>

            <div className="w-1/5">
                <img src="https://previews.123rf.com/images/pavelvinnik/pavelvinnik1907/pavelvinnik190700381/127825800-best-offer-men-shopping-enter-promocode-big-sale-.jpg" alt="" className="h-72" />
            </div>
        </div>
    )
}

export default Banners
