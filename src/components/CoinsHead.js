import { useState } from "react";
import { CoinsList } from "./CoinsList";



export function CoinsHead() {

    const [search, setSearch] = useState('')
       
return(

<>

<div className = "container antialiased mx-auto px-8 font-sans">
<div className = "py-8">

    <div>
        <h2 className = "text-2xl font-bold leading-tight text-slate-800">Cryptocurrencies</h2>
    </div>

    <div className = "my-2 flex sm:flex-row flex-col">
                
        <div className = "block relative">

            <span className = "h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg viewBox="0 0 24 24" className = "h-4 w-4 fill-current text-gray-500">
                    <path
                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                    </path>
                </svg>
            </span>

            <input 
            placeholder="Search" onChange = {e => setSearch(e.target.value)}
            className = "appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-200 border-b block pl-8 pr-6 py-2 w-full bg-gray-100 text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:border-gray-300 focus:placeholder-slate-600 focus:text-slate-700 focus:outline-none" 
            />              
                
                 
                    
        </div>
        
    </div>

    <div className = "-mx-10 sm:-mx-8 px-8 sm:px-8 py-4 overflow-hidden  ">
        <div className = "inline-block min-w-full shadow rounded-lg overflow-hidden">

            <table className = "min-w-full leading-normal border-2 border-gray-200">
                <thead>
                     <tr>                      

                        <th
                            className = 
                            "px-10 py-3 sm:px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider" >
                            Name
                        </th>

                        <th
                            className = 
                            "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                            24h
                        </th>

                        <th
                            className = 
                            "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                            Price
                        </th>

                        <th
                            className = 
                            "px-5 py-3  border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider hide">
                            Circulating Supply
                        </th>

                        <th
                            className = 
                            "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider hide">
                            ATH
                        </th>

                        <th
                            className = 
                            "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider hide">
                            ATH%
                        </th>
                                
                        <th
                            className = 
                            " px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-800 uppercase tracking-wider  hide-mc">
                            Market Cap
                        </th>
                    </tr>
                </thead>

                <CoinsList search = {search}/>


            </table>                          
                        
                           
        </div>
    </div>
</div>
</div>




                    

</>)

    
}