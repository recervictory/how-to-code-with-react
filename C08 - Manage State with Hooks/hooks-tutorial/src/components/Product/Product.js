import React, { useReducer } from "react";
import "./Product.css";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(total) {
  // * Important:  Used as Pure function --- which gives the same outputs when given the same inputs and does not rely on a specific environment to operate. By converting the function to a pure function, you make it more reusable. You can, for example, extract it to a separate file and use it in multiple components.
  return total.toLocaleString(undefined, currencyOptions);
}

function cartReducer(state, product) {
  return [...state, product];
}

function totalReducer(state, price) {
    return state + price;
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function add(product) {
    setCart(product.name);
    setTotal(product.price);
  }

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>
      <div>
        {products.map((product) => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </div>
            <button onClick={() => add(product)}>Add</button>{" "}
            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
