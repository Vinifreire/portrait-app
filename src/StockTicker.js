import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import './styles/StockTicker.css';

function StockTicker() {
  const stockData = useSelector((state) => state.stockData);

  if (!stockData.price || !stockData.volume) {
    return <div className="no-data">No data available</div>;
  }

  const data = [
    {
      item: 'price',
      maximum: stockData.price[0],
      minimum: stockData.price[1],
      average: stockData.price[2],
    },
    {
      item: 'volume',
      maximum: stockData.volume[0],
      minimum: stockData.volume[1],
      average: stockData.volume[2],
    }
  ];

  return (
    <div className="child-component">
      <h2>Stock Data</h2>
      <Table data={data} />
    </div>
  );
}

export default StockTicker;