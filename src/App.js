import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CoinList from "./components/CoinList";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [numberOfCoin, setNumberofCoin] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=`+numberOfCoin+`&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [numberOfCoin]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberofCoin(e.target.value);
    
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">C o i n I n f o</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
            style={{ padding: 10 }}
          />
          <select className="coin-input" onChange={handleNumberChange}>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <CoinList
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;