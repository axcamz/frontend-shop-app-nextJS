import MediumCard from './atoms/MediumCard'

const Cards = () => {
    return (
        <div className="lg:container lg:mx-auto lg:px-0 px-3 flex lg:flex-row flex-col justify-between mt-3">
            <MediumCard src="/static/images/cards/card-2.jpg"/>
            <MediumCard src="/static/images/cards/card-1.jpg" className="transform -scale-y-1 -rotate-180"/>
        </div>
    )
}

export default Cards
