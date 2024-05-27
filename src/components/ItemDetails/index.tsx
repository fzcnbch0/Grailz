import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';
interface Item {
  item_id: number;
  name: string;
  description?: string;
  price?: number;
  item_category?: {
    department?: string;
    category?: string;
    size?: string;
    designer?: string;
  };
  measurements?: {
    length?: number;
    width?: number;
  };
  offer?: {
    image_path?: string;
  };
}

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('No item ID provided');
      setLoading(false);
      return;
    }

    const fetchItem = async () => {
      try {
        console.log(`Fetching item with ID: ${id}`); // Debug log
        const response = await axios.get<Item>(`http://localhost:3000/items/${id}`);
        setItem(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div id='item-container'>
      <h1>{item?.name}</h1>
      <p>{item?.description}</p>
      <p>Price: ${item?.price}</p>
      {item?.item_category && (
        <div>
          <h2>Category</h2>
          <p>Department: {item.item_category.department}</p>
          <p>Category: {item.item_category.category}</p>
          <p>Size: {item.item_category.size}</p>
          <p>Designer: {item.item_category.designer}</p>
        </div>
      )}
      {item?.measurements && (
        <div>
          <h2>Measurements</h2>
          <p>Length: {item.measurements.length} cm</p>
          <p>Width: {item.measurements.width} cm</p>
        </div>
      )}
      {item?.offer && (
        <div>
          <h2>Offer</h2>
          <img src={item.offer.image_path} alt={item.name} />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
