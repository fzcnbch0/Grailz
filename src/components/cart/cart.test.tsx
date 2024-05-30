import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Cart from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Cart', () => {
  const toggleCart = jest.fn();
  const userId = 1;
  const mockData = [
    {
      item: {
        item_id: 1,
        name: 'Test Item',
        description: 'Test Description',
        price: '10',
        item_category: {
          size: 'M',
          designer: 'Test Designer',
        },
        offer: {
          image_path: 'test_image.jpg',
        },
      },
    },
  ];

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: mockData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches and displays cart items when cart is open', async () => {
    render(<Cart cartOpen={true} toggleCart={toggleCart} userId={userId} />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Size: M')).toBeInTheDocument();
    expect(screen.getByText('Price: 10 zł')).toBeInTheDocument();
  });

  it('does not fetch cart items when cart is closed', async () => {
    render(<Cart cartOpen={false} toggleCart={toggleCart} userId={userId} />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(0));
  });

  it('displays an error message when fetching cart items fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Failed to fetch cart items'));

    render(<Cart cartOpen={true} toggleCart={toggleCart} userId={userId} />);

    await waitFor(() => expect(screen.getByText('Failed to fetch cart items')).toBeInTheDocument());
  });

  it('prevents checkout when terms and conditions are not agreed to', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    render(<Cart cartOpen={true} toggleCart={toggleCart} userId={userId} />);
  
    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
  
    fireEvent.click(screen.getByText('Checkout'));
  
    expect(alertSpy).toHaveBeenCalledWith('Please agree to the terms and conditions.');
  });
  
});
