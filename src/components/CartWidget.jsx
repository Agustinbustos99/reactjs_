import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      {itemCount > 0 && <span className="badge badge-danger cart-badge">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
