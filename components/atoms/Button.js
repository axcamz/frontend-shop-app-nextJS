const Button = (props) => {
    return (
        <button className="px-8 py-3 shadow-lg font-medium font-poppins text-semiblack focus:outline-none rounded-lg bg-primary text-xl">
            {props.title}
        </button>
    )
}

export default Button
