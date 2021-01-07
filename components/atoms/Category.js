const { default: Image } = require("next/image")

const Category = ({className, src}) => {
    return (
        <div className={className+' group relative flex justify-center items-end pb-3 rounded-xl overflow-hidden cursor-pointer'}>
            <h3 className="text-lg z-20 font-poppins text-white transform group-hover:-translate-y-16 transition-transform w-2/4 text-center">Sofa and Armchair</h3>
            <div className="bg-black group-hover:bg-opacity-40 transition-all bg-opacity-0 bottom-0 h-full w-full absolute z-10"></div>
            <Image
                src={src}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}

export default Category
