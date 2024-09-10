import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>The Flying Carpet</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Order
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;