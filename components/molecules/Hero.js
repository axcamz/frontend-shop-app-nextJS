import Button from '../atoms/Button';
import Image from 'next/image';

const Hero = ({src, children}) => {
    return (
        <div className="w-full h-40 md:h-80 rounded-xl relative overflow-hidden z-0">
            <div className="absolute bottom-10/1 left-10/1 z-20 font-poppins w-96">
                <div className="flex text-semiblack mb-8">
                    {children}
                </div>
                <Button title="Show Now"/>
            </div>
            <Image
                src={src}
                layout="fill"
                objectFit="cover"
            />
        </div>  
    )
}
export default Hero;