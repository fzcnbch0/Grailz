import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    if (!cartOpen) {  
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="text">
          ENRAGE
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            SHOP
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#shop1">Shop Item 1</a>
              <a href="#shop2">Shop Item 2</a>
              <a href="#shop3">Shop Item 3</a>
            </div>
          )}
        </li>
        <li id="blanc">
          <a href="#blanc-by-enrage">BLANK BY ENRAGE</a>
        </li>
      </ul>
      <ul className="navbar-actions">
        <li>
          <a href="#pln">PLN</a>
        </li>
        <li>
          <a href="#search">SEARCH</a>
        </li>
        <li>
          <a href="#account">ACCOUNT</a>
        </li>
        <li>
          <a href="#cart" onClick={toggleCart}>
            CART
          </a>
        </li>
      </ul>
      {cartOpen && (
        <div className="cart-popup">
          <div className="cart-content">
            <div className="cart-heading">
              <div className="carttext">Cart</div>
              <button className="close-btn" onClick={toggleCart}>
                X
              </button>
            </div>
          </div>  
        </div>
      )}
    </nav>
  );
}

export default Navbar;
