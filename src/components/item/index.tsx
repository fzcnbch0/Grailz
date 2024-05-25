import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Filter from '../filters';

interface Item {
  item_id: number;
  name: string;
  description: string;
  price: string;
}

interface ItemListProps {
  category?: string; // Make category prop optional
}

const ItemList: React.FC<ItemListProps> = ({ category }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async (filter = {}) => {
    setLoading(true);
    try {
      const query = new URLSearchParams(filter as Record<string, string>).toString();
      let url = 'http://localhost:3000/items';
      if (category) {
        url += `/category/${category}`;
      }
      const response = await axios.get<Item[]>(`${url}?${query}`);
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      setError('There was an error fetching the items!');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id='content-box'>
      <Filter onFilter={fetchItems} />
      <div id='listtt'>
        <ul id='itemsList'>
          {items.map(item => (
            <li key={item.item_id} className='singleItem'>
              <img src='' alt='zdj' className='item-photo' />
              <h2 className='item-name'>{item.name}</h2>
              <p className='item-price'> ${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
