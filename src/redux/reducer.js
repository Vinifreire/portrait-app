import { FETCH_STOCK_DATA } from './Actions';

const initialState = {
  stockData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DATA:
      return {
        ...state,
        stockData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
