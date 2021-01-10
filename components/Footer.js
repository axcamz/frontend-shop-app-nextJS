import List from "./atoms/List"
import InputButton from "./molecules/InputButton"

const Footer = () => {
    return (
        <div className="bg-primary mt-10 py-12">
            <div className="container mx-auto flex items-center justify-around flex-wrap">
                <List>
                    <div className="flex flex-col">
                        <a href="#">Halo semuanya</a>
                        <a href="#">Halo semuanya</a>
                        <a href="#">Halo semuanya</a>
                    </div>
                </List>
                <List>
                    <div className="flex flex-col">
                        <a href="#">Halo semuanya</a>
                        <a href="#">Halo semuanya</a>
                        <a href="#">Halo semuanya</a>
                    </div>
                </List>
                <List>
                    <div className="flex flex-col">
                        <a href="#">Halo semuanya</a>
                        <a href="#">Halo semuanya</a>
                        <a href="#">Halo semuanya</a>
                    </div>
                </List>
                <InputButton placeholder="Hai"/>
            </div>
        </div>
    )
}

export default Footer
