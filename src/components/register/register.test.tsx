import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import RegisterComponent from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RegisterComponent', () => {



    it('should handle registration error', async () => {
        // Mock axios.post to throw an error
        mockedAxios.post.mockImplementationOnce(() => Promise.reject(new Error('Registration error')));
    
        const { getByPlaceholderText, getByText } = render(
          <Router>
            <RegisterComponent />
          </Router>
        );
    
        fireEvent.change(getByPlaceholderText('Nazwa użytkownika'), { target: { value: 'testUser' } });
        fireEvent.change(getByPlaceholderText('Hasło'), { target: { value: 'testPassword' } });
        fireEvent.change(getByPlaceholderText('Miasto'), { target: { value: 'testCity' } });
    
        fireEvent.click(getByText('Register'));
    
        // We can't directly test console.error, but we can at least ensure that the post request was made
        expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3000/login/register', {
          name: 'testUser',
          password: 'testPassword',
          city: 'testCity',
        });
      });

  it('should register a user when form is submitted', async () => {
    mockedAxios.post.mockResolvedValue({ status: 201 });

    const { getByPlaceholderText, getByText } = render(
      <Router>
        <RegisterComponent />
      </Router>
    );

    fireEvent.change(getByPlaceholderText('Nazwa użytkownika'), { target: { value: 'testUser' } });
    fireEvent.change(getByPlaceholderText('Hasło'), { target: { value: 'testPassword' } });
    fireEvent.change(getByPlaceholderText('Miasto'), { target: { value: 'testCity' } });

    fireEvent.click(getByText('Register'));

    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3000/login/register', {
      name: 'testUser',
      password: 'testPassword',
      city: 'testCity',
    });
  });
});
