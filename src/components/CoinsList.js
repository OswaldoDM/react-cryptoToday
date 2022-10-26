import { useEffect, useState } from "react"
import { fetchAPI } from "../services/fetchAPI"
import {Link} from "react-router-dom";




export function CoinsList({search}) {
    
    const [coins, setCoins] = useState([])
       
    

    useEffect(() => {
      
        fetchAPI() .then(setCoins) .catch(console.error)    
      
    }, [])

return(

<>

{coins.filter(coin => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)).map(coin => 

<tbody key = {coin.id} className = "tbody">
    
    <tr>
        <td className = "px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm ">

            <div className = "flex items-center">

                <div className = "flex-shrink-0 w-10 h-10">
                    <img className = "w-full h-full rounded-full"
                        src = {coin.image}
                        alt="" />
                </div>

                <div className = "ml-3">
                    
                {/* <Link to = {`coin/${coin.id}`} target = "_blank"> */}
                    <p className = "font-bold text-slate-800 whitespace-no-wrap">
                        {coin.name}
                    </p>
                {/* </Link> */}
                </div>

            </div>

        </td>

        <td className = "px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
            
            <p className = {`whitespace-no-wrap ${coin.price_change_percentage_24h.toString().includes('-') ? 'text-red-600' : 'text-green-600'} `}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            
        </td>

        <td className = "px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
            <p className = "text-gray-600 whitespace-no-wrap" >
                 ${coin.current_price.toLocaleString()}
            </p>
        </td>

        <td className = " hide px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
            <p className = "text-gray-600 whitespace-no-wrap">
                 {coin.circulating_supply.toLocaleString()}
            </p>
        </td>

        <td className = "hide px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
            <p className = "text-gray-600 whitespace-no-wrap">
                 {coin.ath.toLocaleString()}$
            </p>
        </td>

        <td className = "hide px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
            <p className = {`whitespace-no-wrap ${coin.ath_change_percentage.toString().includes('-') ? 'text-red-600' : 'text-green-600'} `}>{coin.ath_change_percentage.toFixed(2)}%</p>
        </td>    
        
        <td className = "hide-mc px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm text-slate-600">          
            {coin.market_cap.toLocaleString()}
        </td>

    </tr>
</tbody>
                      
)}




</>
    )
}

                        
                

                   