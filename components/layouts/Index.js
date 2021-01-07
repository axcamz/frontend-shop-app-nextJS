import Navbar from "../Navbar"
import Banner from "../Banner"
import Head from "next/head"
import Products from "../Products"
import MediumCard from "../atoms/MediumCard"
import Cards from "../Cards"
import Categories from "../Categories"

const Index = () => {
    return (
        <div className="pb-20">
          <Head>
            <title>{'World' ?? props.title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
          </Head>
          <Navbar/>  
          <Banner/>
          <Products/>
          <Cards/>
          <Categories/>
        </div>
    )
}

export default Index
