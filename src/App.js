import React, {useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Coin from './Coin';
import { Link } from 'react-router-dom';




const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  // const lastAddress = useSelector(state => state.wallet.lastAddress);
  // const dispatch = useDispatch();



  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&limit&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => setCoins(data))
  .catch((error) => {
    console.error('Error:', error);
  })
  
  
});

const handleChange = e => {
  setSearch(e.target.value)
}

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='coin-app'>
      <img src="https://www.goodreturns.in/img/2021/05/crypto-currency-background-with-various-of-shiny-silver-and-golden-physical-cryptocurrencies-symbol-coins-bitcoin-ethereum-litecoin-zcash-ripple-stockpack-adobe-stock-1597x1065-1621416241.jpg" height={600} width={1100} /><br />
      <div className="coin-search">
      <h1 className="coin-text">Crypto Search</h1>
      <form>
        <input type="text" placeholder="Search"
        className="coin-input" onChange={handleChange}/>
      </form><br/>
      <div className="coin-link">
      <Link to="/form">Crypto Form</Link><br />
      <Link to="wallet">Crypto Wallet</Link><br />
      </div>
      </div>
      <div className='coin-container'>
        <div className="coin-row">
          <div className="coin-data-title">
            <p className="coin-name-title">Name: </p>
            <p className="coin-symbol-title">Symbol: </p>
            <p className="coin-price-title">Price: </p>
            <p className="coin-volume-title">Volume: </p>
            <p className="coin-percent-title">Price Change: </p>
            <p className="coin-marketcap">Market Cap: </p>
          </div>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
            key={coin.id} 
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App
