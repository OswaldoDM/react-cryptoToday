import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import {fetchAPI} from '../services/fetchAPI';
import { usePageVisibility } from 'react-page-visibility';


export function Carousel() {

    
    const [slider, setSlider] = useState([])
    

    useEffect(() => {
      
        fetchAPI() .then(setSlider) .catch(console.error)    
      
    }, [])

    const isVisible = usePageVisibility()
    document.title = 'CryptoToday'    


    const responsiveObj = {

        0: {
            items: 2
        },

        512: {
            items: 4
        },

        1024: {
            items: 10
        }
        
    }

    const items = slider.map(coin => {

        return (
            <>
            <div className = "flex justify-center items-center cursor-pointer">

                <img src = {coin?.image} alt = {coin.name} className = "h-8"></img>

                <div className = 'flex-col ml-3 uppercase font-bold '>

                    <p className = 
                    {` text-center ${coin.price_change_percentage_24h.toString().includes('-') ? 'text-red-600' : 'text-green-600'} `}>
                        {coin.price_change_percentage_24h.toFixed(2)}%</p>

                    <p className = "text-slate-700 text-xs">{coin.symbol}</p>
                </div>
            
            </div>

            </>
        )

    })
                    
               

    return(

    <>
            
    {
            
    isVisible && 

    <AliceCarousel 
    infinite 
    autoPlayInterval = {1000} 
    animationDuration = {3000} 
    disableDotsControls 
    disableButtonsControls 
    responsive = {responsiveObj} 
        autoPlay  
        items = {items} /> 

            
    }
    
    </>)

}
    
 
    
    
      
             
    

    
    

    
                
            
            
            

            
        
        
        
        
        
            
      



        
        
        



            