
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { ContractIDForm } from './ContractIDForm';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as Object,
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));


describe('RouteFound', () => {
  it('Redirects to correct URL on click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ContractIDForm/>
      </BrowserRouter>,
    );
    const button = getByText('Submit');
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/contracts/dc89ff49-8449-11e7-ac1d-3c52820efd20');
  });
});
