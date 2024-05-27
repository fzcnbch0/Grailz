import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

interface CartProps {
  cartOpen: boolean;
  toggleCart: () => void;
  userId: number; // Assuming you pass userId as a prop to Cart component
}

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

const Cart: React.FC<CartProps> = ({ cartOpen, toggleCart, userId }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}/cart`);
        setCartItems(response.data);
      } catch (error) {
        setError('Failed to fetch cart items');
      }
    };

    if (cartOpen) {
      fetchCartItems();
    }
  }, [cartOpen, userId]);

  return (
    <>
      {cartOpen && (
        <div className="cart-popup">
          <div className="cart-content">
            <div className="cart-heading">
              <div className="carttext">Cart</div>
              <button className="close-btn" onClick={toggleCart}>
                X
              </button>
            </div>
            {error ? (
              <div className="error">{error}</div>
            ) : (
              <ul className="cart-items">
                {cartItems.map((cartItem) => (
                  <li key={cartItem.item.item_id} className="cart-item">
                    <img src={cartItem.item.offer.image_path} alt={cartItem.item.name} />
                    <div className='prod-inf'>
                      <h3>{cartItem.item.name}</h3>
                      <div>Size: {cartItem.item.item_category.size}</div>
                      <div>Price: ${cartItem.item.price}</div>
                    </div>
                  </li>
                  
                ))}
              </ul>
            )}
            <div id='generalinfo'>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
