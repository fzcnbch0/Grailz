import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AccountDetail from '.';
import axios from 'axios';
import '@testing-library/jest-dom';
import { useUser } from '../../UserContext';

jest.mock('axios');
jest.mock('../../UserContext', () => ({
  useUser: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AccountDetail component', () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      user: { userId: 1 },
    });

    mockedAxios.get.mockResolvedValue({
      data: {
        user_id: 1,
        name: 'Test User',
        balance: '100',
        city: 'Test City',
        password: 'password',
        user_orders: [],
        primary_address: {
          address_id: 1,
          street: 'Test Street',
          city: 'Test City',
          country: 'Test Country',
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders AccountDetail component', async () => {
    render(<AccountDetail />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(screen.getByText('Welcome back, Test User')).toBeInTheDocument();
    expect(screen.getByText('Primary Address')).toBeInTheDocument();
    expect(screen.getByText('Street: Test Street')).toBeInTheDocument();
    expect(screen.getByText('City: Test City')).toBeInTheDocument();
    expect(screen.getByText('Country: Test Country')).toBeInTheDocument();
  });
});
