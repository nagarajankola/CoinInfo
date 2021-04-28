import React, { useEffect, useState } from "react";
import axios from "axios";

function CoinList() {
  const [coinName, setCoinName] = useState();
  const [price, setPrice] = useState();
  const [rank, setRank] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      setCoinName(res.data[0].name);
      setPrice(res.data[0].current_price);
      setRank(res.data[0].market_cap_rank);
    }
    getData();
  });

  return (
    <>
      <h2 style={{ paddingTop: 50 }}>list</h2>
      <ul>
        <h1>list</h1>
        <li>{coinName}  {price}  {rank}</li>
      </ul>
    </>
  );
}

export default CoinList;
