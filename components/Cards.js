import MediumCard from './atoms/MediumCard'

const Cards = () => {
    return (
        <div className="lg:container lg:mx-auto lg:px-0 px-3 flex lg:flex-row flex-col justify-between mt-3">
            <MediumCard src="/static/images/card-2.jpg"/>
            <MediumCard src="/static/images/card-1.jpg"/>
        </div>
    )
}

export default Cards
