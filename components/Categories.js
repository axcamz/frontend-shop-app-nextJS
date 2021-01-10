const { default: Category } = require("./atoms/Category")

const Categories = () => {
    return (
        <div className="lg:container lg:mx-auto lg:px-0 px-3 mt-10">
            <div className="flex">
                <h1 className="text-3xl font-bold mb-3 font-poppins text-semiblack">Search by Category</h1>
            </div>
            <div className="grid grid-cols-8 gap-3 md:grid-rows-2 grid-rows-3">
                <Category 
                    className="h-52 col-span-4 row-span-1 md:col-span-4 md:row-span-1"
                    src="/static/images/categories/sofa.jpg"
                />
                <Category 
                    className="h-52 col-span-4 row-span-1 md:col-span-4 md:row-span-1"
                    src="/static/images/categories/table-and-chair.png"
                />
                <Category 
                    className="h-52 col-span-4 row-span-1  md:col-span-2 md:row-span-1"
                    src="/static/images/categories/storage.png"
                />
                <Category 
                    className="h-52 col-span-4 row-span-1  md:col-span-4 md:row-span-1"
                    src="/static/images/categories/sleeping-area.png"
                />
                <Category 
                    className="h-52 col-span-4 row-span-1 md:col-span-2 md:row-span-1"
                    src="/static/images/categories/components.png"
                />
            </div>
        </div>
    )
}

export default Categories
