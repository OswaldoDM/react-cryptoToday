import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataCoinPage } from "../services/fetchAPI"



export function CoinPage() {
    
    const [coin, setCoin] = useState({})
    
    const {id} = useParams()     

    useEffect(() => {  
    dataCoinPage(id) .then(setCoin) .catch(console.error) 
      
    }, [id])
    console.log(coin);
    
    return(

        <>
        <pre>{JSON.stringify(coin)}</pre>
        </>
    )
}