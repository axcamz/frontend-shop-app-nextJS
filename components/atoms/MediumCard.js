import Image from 'next/image'
import ArrowNarrowRight from './icons/ArrowNarrowrRight'

const MediumCard = ({src, className}) => {
    return (
        <div className="relative h-36 md:h-56 mb-3 lg:h-80 lg:w-96/2 w-full">
            <div className="font-poppins text-semiblack top-1/2 -translate-y-1/2 transform left-10/1 z-10 w-3/4 absolute">
                <h1 className="lg:text-4xl text-lg md:text-2xl font-black">Modern Chair For Confortable seat</h1>
                <p className="md:text-lg text-xs">Now Available in all variants</p>
                <div className="flex items-center group mt-5 cursor-pointer">
                    <a href="#" className="md:text-base text-sm font-semibold mr-3">SHOP NOW!</a>
                    <ArrowNarrowRight className="transform group-hover:translate-x-5 transition-transform text-semiblack h-5"/>
                </div>
            </div>
            <Image
                src={src}
                layout="fill"
                objectFit="cover"
                className={"rounded-xl "+className} 
            />
        </div>
    )
}

export default MediumCard
