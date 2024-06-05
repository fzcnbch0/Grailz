import "./index.css";
import { useLocation } from "react-router-dom";
import React from "react";
function Heading() {
  const location = useLocation();

  const getPageName = (path: string): string => {
    if (path === '/') {
      return 'HOME';
    }else if (path === '/shop/men') {
      return 'MEN';
    } else if (path.startsWith('/items/')) {
      return 'ITEM';
    } else if (path === '/shop/women') {
      return 'WOMEN';
    } else if (path === '/account') {
      return 'ACCOUNT';
    } else if (path === '/account/register') {
      return 'REGISTER';
    }else if (path === '/checkout') {
      return 'CHECKOUT';
    }else {
      return 'PAGE';
    }
  };
  

  const currentPath = location.pathname;
  const pageName = getPageName(currentPath);
  console.log(pageName);

  return (
    <>
      <div id="heading">
        <a id="directory">HOME / {pageName}</a>
      </div>
    </>
  );
}

export default Heading;
