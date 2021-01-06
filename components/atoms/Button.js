const Button = (props) => {
    return (
        <button className="md:px-8 px-4 py-2 md:py-3 shadow-lg font-medium font-poppins text-semiblack focus:outline-none rounded-lg bg-primary text-sm  md:text-xl">
            {props.title}
        </button>
    )
}

export default Button
