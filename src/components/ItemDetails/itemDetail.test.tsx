import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from '.';
import { Routes } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ItemDetail', () => {
    it('fetches and displays the item', async () => {
    const item = {
      item_id: 1,
      name: 'Test Item',
      description: 'This is a test item',
      price: 100,
      item_category: {
        department: 'Test Department',
        category: 'Test Category',
        size: 'Medium',
        designer: 'Test Designer',
      },
      measurements: {
        length: 10,
        width: 5,
      },
      offer: {
        image_path: 'http://localhost:3000/images/test.jpg',
      },
    };

    mockedAxios.get.mockResolvedValueOnce({ data: item });
    mockedAxios.get.mockResolvedValueOnce({ data: { itemId: 1, userCount: 5 } });

    render(
        <MemoryRouter initialEntries={['/items/1']}>
          <Routes>
            <Route path="/items/:id" element={<ItemDetail />} />
          </Routes>
        </MemoryRouter>
      );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(2));

    expect(screen.getByText('Test Item')).toBeInTheDocument;
    expect(screen.getByText('This is a test item')).toBeInTheDocument;
    expect(screen.getByText('Price: $100')).toBeInTheDocument;
    expect(screen.getByText('Test Department')).toBeInTheDocument;
    expect(screen.getByText('Test Category')).toBeInTheDocument;
    expect(screen.getByText('Medium')).toBeInTheDocument;
    expect(screen.getByText('Test Designer')).toBeInTheDocument;
    expect(screen.getByText('5')).toBeInTheDocument;
  });

  it('displays an error message if the fetch fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Fetch failed'));

    render(
        <MemoryRouter initialEntries={['/items/1']}>
          <Routes>
            <Route path="/items/:id" element={<ItemDetail />} />
          </Routes>
        </MemoryRouter>
      );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(screen.getByText('Error: Fetch failed')).toBeInTheDocument;
  });
});
