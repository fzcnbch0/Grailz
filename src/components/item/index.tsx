import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.css";

// Define the Item interface
interface Item {
  item_id: number;
  name: string;
  description: string;
  price: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Item[]>('http://localhost:3000/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error fetching the items!');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id='listtt'>
      <ul id='itemsList'>
        {items.map(item => (
          <li key={item.item_id} className='singleItem'>
            <img src="" alt="zdj" className='item-photo'/>
            <h2 className='item-name'>{item.name}</h2>
            <p className='item-price'> ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
