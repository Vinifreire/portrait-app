import React, { useState } from 'react';
import StockTicker from './StockTicker';
import { useFetch } from '../hooks/useFetch';
import '../styles/App.css';

function App() {
  const [ticker, setTicker] = useState('');
  const { loading, handleFetch } = useFetch(ticker);

  return (
    <div className="app">
      <h1>Stock Data Viewer</h1>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter Ticker Symbol"
        className="input"
      />
      <button onClick={handleFetch} className="button" disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      <StockTicker loading={loading} />
    </div>
  );
}

export default App;
