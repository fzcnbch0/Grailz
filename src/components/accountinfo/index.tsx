import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';

interface User {
  user_id: number;
  name: string;
  balance: string;
  city: string;
  password: string;
  user_orders: Order[];
  primary_address?: Address; // Dodane primary_address jako opcjonalne
}

interface Order {
  order_id: number;
  item_id: number;
  item: {
    item_id: number;
    name: string;
    description?: string;
    price?: string; 
    item_category?: {
      size?: string;
      designer?: string;
    };
    offer?: {
      image_path?: string;
    };
  };
}

interface Address {
  address_id: number;
  street: string;
  city: string;
  country: string;
}

const AccountDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`http://localhost:3000/users/${id}`);
        console.log('User data:', response.data);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div id='account-container'>
      <div id="wback">
        <div>Welcome back, {user.name}</div>
        <div id='out'>Logout</div>
      </div>

      <div className="account-details">
        <div className="orders-column">
          <h2>My Orders</h2>
          {user.user_orders.length > 0 ? (
            <div className="order-list">
              {user.user_orders.map((order) => (
                <div key={order.order_id} className="order">
                  <div className='inf'>
                  <h3>{order.item.name}</h3>
                  <p>Price: ${order.item.price}</p>
                  {order.item.item_category && (
                    <div className="category">
                      <p>Size: {order.item.item_category.size}</p>
                    </div>
                  )}
                  </div>

                  {order.item.offer && (
                    <div className="offer">
                      <img src={order.item.offer.image_path} alt={order.item.name} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No orders found</p>
          )}
        </div>

        <div className="primary-address-column">
          <h2>Primary Address</h2>
          {user.primary_address ? (
            <div className="address-details">
              <p>Street: {user.primary_address.street}</p>
              <p>City: {user.primary_address.city}</p>
              <p>Country: {user.primary_address.country}</p>
            </div>
          ) : (
            <div className="address-details">
            <p>No primary address found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
