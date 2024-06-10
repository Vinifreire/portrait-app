export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';

export const fetchStockData = (ticker) => {
  return async (dispatch) => {
    try {
      // Simulate API call
      const response = await fetch(`http://localhost:3001/stock_ticker/${ticker}`);
      const data = await response.json();
      
      // Dispara a ação com os dados da API
      dispatch({ type: FETCH_STOCK_DATA, payload: data });
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };
};
