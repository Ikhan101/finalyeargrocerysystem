import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="nav_link" onClick={() => setShow(true)}>
          GrocerySync
        </span>
        <span className="nav_link" onClick={() => setShow(true)}>
          Shopping
        </span>
        <span className="nav_link" onClick={() => setShow(false)}>
          {/* About Us */}
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



