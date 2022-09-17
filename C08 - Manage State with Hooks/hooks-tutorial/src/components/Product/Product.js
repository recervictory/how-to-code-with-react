import React, { useState } from "react";
import "./Product.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(total) {
  // * Important:  Used as Pure function --- which gives the same outputs when given the same inputs and does not rely on a specific environment to operate. By converting the function to a pure function, you make it more reusable. You can, for example, extract it to a separate file and use it in multiple components.
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Product() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>
      <div className="product">
        <span role="img" aria-label="ice cream">
          🍦
        </span>
      </div>
      <button>Add</button> <button>Remove</button>
    </div>
  );
}
