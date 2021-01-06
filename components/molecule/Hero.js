import Button from '../atoms/Button';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="container mx-auto">  
            <div className="w-full h-80 rounded-xl relative overflow-hidden shadow-xl z-0">
                <div className="absolute top-1/2 transform left-28 -translate-y-1/2 z-20 font-poppins w-96">
                    <div className="flex text-semiblack mb-8">
                        <span className="text-7xl font-bold">30%</span>
                        <span className="text-xl pl-4">Cashback on Your Fisrt Purchase</span>
                    </div>
                    <Button title="Show Now"/>
                </div>
                <Image
                    src="/static/images/hero2.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>  
        </div>
    )
}
export default Hero;