const List = ({title, children}) => {
    return (
        <div className="flex flex-col font-poppins">
            <h1 className="font-semibold text-xl">Guide and Help</h1>
            {children}
        </div>
    )
}

export default List
