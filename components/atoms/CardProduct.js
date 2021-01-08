import Image from 'next/image';
import { useState } from 'react';
import { Wishlist } from './icons/index';
import Button from './Button';

const CardProduct = ({src, productName, price, inWishlist}) => {
    const [isWishlist, setWishlist] = useState(inWishlist)
    return (
        <div className="md:w-64 md:h-80 w-40 p-2 h-48 md:p-5 flex flex-col justify-between shadow-md rounded-lg">
            <div className="relative h-3/6 rounded-lg">
                <Image
                    src={src}   
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="text-semiblack font-poppins mt-2 flex flex-col  h-3/6 justify-between">
                <div className="flex flex-col">
                    <span className="text-base md:text-2xl">{productName}</span>
                    <span className="font-extrabold text-sm md:text-xl">Rp. {price}K</span>
                </div>
                <div className="flex justify-between">
                    <button className="bg-primary md:py-1 text-semiblack md:font-bold md:px-3 w-3/4 md:text-base py-1 text-sm rounded focus:outline-none focus:ring-4 ring-yellow-300 transition-all">Add to Cart</button>
                    <button onClick={() => setWishlist(!isWishlist)} className="bg-primary md:py-1 md:px-1 w-1/6 rounded flex justify-center items-center focus:outline-none">
                        <Wishlist className="md:h-7 h-5" fill={isWishlist ? '#dc2626':'none'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
