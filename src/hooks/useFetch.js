import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../redux/Actions';

export const useFetch = (ticker) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFetch = async () => {
    setLoading(true);
    await dispatch(fetchStockData(ticker));
    setLoading(false);
  };

  return { loading, handleFetch };
};