


export const fetchAPI = async() => {

    try {

    const url = ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false `

    const resp = await fetch(url)
    const data = await resp.json()
    
        
    return data;
        
    } catch (error) {
        console.log(error);
    }

}

export const dataCoinPage = async(id) => {

    try {

    const url = (` https://api.coingecko.com/api/v3/coins/${id} `)

    const resp = await fetch(url)
    const data = await resp.json()
    
    
    return data;
        
    } catch (error) {
        console.log(error);
    }

}

// export const dataSlider = async() => {

//     try {

//     const url = ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false `

//     const resp = await fetch(url)
//     const data = await resp.json()
    
        
//     return data;
        
//     } catch (error) {
//         console.log(error);
//     }

// }






