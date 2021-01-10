import Image from 'next/image'
import Button from './atoms/Button'

const SingleBanner = () => {
    return (
        <div className="relative w-full md:h-96 h-40 mt-10">
            <div className="lg:container lg:mx-auto lg:px-0 px-3">
                <div className="font-poppins top-1/2 transform -translate-y-1/2 text-semiblack z-20 absolute">
                    <h1 className="md:text-6xl text-xl font-semibold">Big Sale!</h1>
                    <h5 className="md:text-xl mt-1">Discount Up to</h5>
                    <h1 className="md:text-7xl text-2xl font-bold mb-5">90%</h1>
                    <Button title="Shop Now!"/>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-r from-secondary "></div>
            <Image
                src="/static/images/banners/big.png"
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}

export default SingleBanner
