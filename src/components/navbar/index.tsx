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
          GRAILZ
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            SHOP
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/shop1">Shop Item 1</Link>
              <Link to="/shop2">Shop Item 2</Link>
              <Link to="/shop3">Shop Item 3</Link>
            </div>
          )}
        </li>
        <li id="blanc">
          <Link to="/blanc-by-enrage">BLANK BY GRAILZ</Link>
        </li>
      </ul>
      <ul className="navbar-actions">
        <li>
          <Link to="/pln">PLN</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
        <li>
          <Link to="/account">ACCOUNT</Link>
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
