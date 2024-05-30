import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '../../UserContext';
import Navbar from './index';
import React from 'react';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <UserProvider>
        <Router>
          <Navbar />
        </Router>
      </UserProvider>
    );

    expect(getByText('GRAILZ')).toBeInTheDocument;
  });

  it('toggles dropdown when SHOP button is clicked', () => {
    const { getByText } = render(
      <UserProvider>
        <Router>
          <Navbar />
        </Router>
      </UserProvider>
    );

    fireEvent.click(getByText('SHOP'));
    expect(getByText('All')).toBeInTheDocument;
  });

  it('changes currency when a different currency is selected', () => {
    const { getByText, queryByText } = render(
      <UserProvider>
        <Router>
          <Navbar />
        </Router>
      </UserProvider>
    );

    fireEvent.click(getByText('PLN'));
    fireEvent.click(getByText('US Dollar'));
    expect(queryByText('PLN')).toBeNull();
    expect(getByText('USD')).toBeInTheDocument;
  });
});
