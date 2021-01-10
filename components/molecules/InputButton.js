const { default: TextInput } = require("../atoms/TextInput")

const InputButton = ({placeholder}) => {
    return (
        <div className="flex relative w-min max-h-full">
            <TextInput placeholder={placeholder}/>
            <button className="absolute top-0 bg-blue-500 flex justify-center items-center h-full w-10 rounded right-0">K</button>
        </div>
    )
}

export default InputButton
