import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../src/components/Table';

test('renders table with header and data', () => {
  const data = [
    { item: 'price', maximum: 199.62, minimum: 124.17, average: 161.895 },
    { item: 'volume', maximum: 154338835.0, minimum: 24018404.0, average: 172.47158319999997 }
  ];
  
  render(<Table data={data} />);
  
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
  expect(dataCells[4]).toHaveTextContent('volume');
  expect(dataCells[5]).toHaveTextContent('154338835.0');
  expect(dataCells[6]).toHaveTextContent('24018404.0');
  expect(dataCells[7]).toHaveTextContent('172.47158319999997');
});
