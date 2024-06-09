import React, { useState } from 'react';
import StockTicker from './StockTicker';
import { useDispatch } from 'react-redux';
import { fetchStockData } from './Actions';
import './styles/App.css';

function App() {
  const [ticker, setTicker] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    // Dispara a ação para buscar os dados da ação
    dispatch(fetchStockData(ticker));
  };

  return (
    <div className="app">
      <h1>Stock Data Viewer</h1>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter a Stock Ticker"
        className="input"
      />
      <button onClick={handleSearch}>Search</button>
      <StockTicker />
    </div>
  );
}

export default App;