import Navbar from "../components/Navbar"
import Slick from "../components/Slick"
import Head from "next/head"

const Index = () => {
    return (
        <div className="">
          <Head>
            <title>{'World' ?? props.title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
          </Head>
          <Navbar/>  
          <Slick/>
        </div>
    )
}

export default Index
