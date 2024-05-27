import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart";  // Import the new Cart component

interface Currency {
  code: string;
  name: string;
}

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('PLN');

  const currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'PLN', name: 'Zloty' }
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleCart = () => {
    setCartOpen(!cartOpen);
    document.body.style.overflow = cartOpen ? "auto" : "hidden";
  };
  const toggleCurrencyDropdown = () => setCurrencyDropdownOpen(!currencyDropdownOpen);
  const handleCurrencySelect = (code: string) => {
    setSelectedCurrency(code);
    setCurrencyDropdownOpen(false);
  };

  const userId = 2; // Example user ID as a number

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
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleCurrencyDropdown}>
            {selectedCurrency}
          </button>
          {currencyDropdownOpen && (
            <div className="dropdown-content-c">
              {currencies.map(currency => (
                <button key={currency.code} onClick={() => handleCurrencySelect(currency.code)}>
                  {currency.name}
                </button>
              ))}
            </div>
          )}
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
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} userId={userId} />  {/* Pass userId as a number */}
    </nav>
  );
}

export default Navbar;
