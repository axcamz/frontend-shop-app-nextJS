import Image from 'next/image'

const MediumCard = ({src}) => {
    return (
        <div className="relative h-36 md:h-56 mb-3 lg:h-80 lg:w-96/2 w-full">
            <Image
                src={src}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
            />
        </div>
    )
}

export default MediumCard
