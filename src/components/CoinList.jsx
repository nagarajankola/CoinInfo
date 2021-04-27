import React, { useEffect } from "react";
import axios from "axios";
import SearchCoin from "./SearchCoin";
import Header from "./Header";


function CoinList(){
    // useEffect(()=>{
    //     async function getData(){
    //         const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    //         console.log(res.data[0].id);
    //     }
    //     getData();
    // })

    return(
        <>
        <h2 style={{paddingTop:50}}>list</h2>
        {/* <SearchCoin /> */}
        </>
    );
}

export default CoinList;