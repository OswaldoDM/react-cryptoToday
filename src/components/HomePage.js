import { Carousel } from "./Carousel";
import { CoinsHead } from "./CoinsHead";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";




export function HomePage() {

    return(

        <>
        <Header/>
        <Hero/>    
        <Carousel/>
        <CoinsHead/>
        <Footer/>
        
        </>
    )
}