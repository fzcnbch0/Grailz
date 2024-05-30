import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ItemList from '.';

jest.mock('axios');

describe('ItemList', () => {
  const mockData = [
    { item_id: 1, name: 'Item 1', description: 'Description 1', price: '10' },
    { item_id: 2, name: 'Item 2', description: 'Description 2', price: '20' },
  ];

//   it('fetches and displays items', async () => {
//     (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });
  
//     render(<ItemList />);
  
//     expect(screen.getByText('Loading...')).toBeInTheDocument;
  
//     // Use a regular expression as the text matcher
//     await waitFor(() => expect(screen.getByText(/Item 1/i)).toBeInTheDocument);
  
//     expect(screen.getByText(/Item 2/i)).toBeInTheDocument;
//     expect(screen.getByText(/\$10/i)).toBeInTheDocument;
//     expect(screen.getByText(/\$20/i)).toBeInTheDocument;
//   });

  it('displays error message when fetch fails', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error());

    render(<ItemList />);

    await waitFor(() => expect(screen.getByText('There was an error fetching the items!')).toBeInTheDocument);
  });
});
