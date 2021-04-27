import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import CoinList from "./components/CoinList";
import SearchCoin from "./components/SearchCoin";

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={CoinList}/>
      <Route path="/SearchCoin" component={SearchCoin}/>
    </Switch>
      {/* <Header />
      <CoinList /> */}
    </div>
  );
}

export default App;
