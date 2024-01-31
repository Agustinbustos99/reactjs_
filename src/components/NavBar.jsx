import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  const cartItemCount = 3; 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <Link className="navbar-brand" to="/">tu tienda online</Link>
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria1">vinos</Link>
            </li>
          </ul>

         
          <CartWidget itemCount={cartItemCount} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
