import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ChildComponent from '../src/components/ChildComponent';

const mockStore = configureStore([]);

test('renders child component with table and data', () => {
  const initialState = {
    stockData: {
      price: [199.62, 124.17, 161.895],
      volume: [154338835.0, 24018404.0, 172.47158319999997]
    }
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ChildComponent />
    </Provider>
  );

  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();

  const headerElements = screen.getAllByRole('columnheader');
  expect(headerElements).toHaveLength(4);

  const dataRowElements = screen.getAllByRole('row');
  expect(dataRowElements).toHaveLength(3); // inclui o cabeçalho

  // Verifica se os dados estão corretamente renderizados
  const dataCells = screen.getAllByRole('cell');
  expect(dataCells[0]).toHaveTextContent('price');
  expect(dataCells[1]).toHaveTextContent('199.62');
  expect(dataCells[2]).toHaveTextContent('124.17');
  expect(dataCells[3]).toHaveTextContent('161.895');
});
