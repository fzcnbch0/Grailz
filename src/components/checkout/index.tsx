import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import './index.css';

interface CartItem {
  item: {
    item_id: number;
    name: string;
    description: string;
    price: string;
    item_category: {
      size: string;
      designer: string;
    };
    offer: {
      image_path: string;
    };
  };
}

const Checkout: React.FC = () => {
  const { user } = useUser();
  const userId = user ? user.userId : null;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:3000/users/${userId}/cart`);
          setCartItems(response.data);
        } catch (error) {
          setError('Failed to fetch cart items');
        }
      }
    };

    fetchCartItems();
  }, [userId]);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => acc + parseFloat(curr.item.price), 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handleOrder = async () => {
    if (userId) {
      try {
        await axios.post(`http://localhost:3000/users/${userId}/order`, {
          items: cartItems.map(cartItem => cartItem.item.item_id)
        });
        setOrderPlaced(true);
        setCartItems([]);
      } catch (error) {
        setError('Failed to place order');
      }
    } else {
      setError('User is not logged in');
    }
  };

  if (orderPlaced) {
    return <div>Order has been placed successfully!</div>;
  }

  return (
    <div className="checkout">
        <div className='formal-info'>
        <button className='cart-buttons' onClick={handleOrder}>Order</button>
        </div>
      <div className='items'>

      
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <div className="empty-cart">Cart is empty</div>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map((cartItem) => (
                  <li key={cartItem.item.item_id} className="cart-item">
                    <img src={cartItem.item.offer.image_path} alt={cartItem.item.name} />
                    <div className='prod-inf'>
                      <h3>{cartItem.item.name}</h3>
                      <div>Size: {cartItem.item.item_category.size}</div>
                      <div>Price: {cartItem.item.price} zł</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div id='generalinfo'>
                <p id='price'>Total: {totalPrice.toFixed(2)} zł</p>
                <p id='tax'>Tax included and shipping calculated at checkout</p>
                
              </div>
            </>
          )}
        </>
      )}
      </div>
    </div>
  );
};

export default Checkout;
