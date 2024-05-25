import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import ItemList from '../../components/item';
import Heading from '../../components/heading';
import Footer from '../../components/footer';
const ShopPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const departmentCategory = category || "defaultCategory";
  return (
    <div>
        <Navbar/>
        <Heading/>
        <ItemList category={departmentCategory} />
        <Footer/>
    </div>
  );
};

export default ShopPage;
