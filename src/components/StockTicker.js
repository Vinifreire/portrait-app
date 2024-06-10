import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import { formatNumber } from '../utils/format';
import '../styles/StockTicker.css';

function StockTicker({ loading }) {
  const stockData = useSelector((state) => state.stockData);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (!stockData.price || !stockData.volume) {
    return <div className="no-data">No data available</div>;
  }

  const data = [
    {
      item: 'price',
      maximum: formatNumber(stockData.price[0]),
      minimum: formatNumber(stockData.price[1]),
      average: formatNumber(stockData.price[2]),
    },
    {
      item: 'volume',
      maximum: stockData.volume[0],
      minimum: stockData.volume[1],
      average: formatNumber(stockData.volume[2]),
    }
  ];

  return (
    <div className="child-component">
      <Table data={data} />
    </div>
  );
}

export default StockTicker;