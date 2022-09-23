import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

// Todo: Redux component
import { Provider } from "react-redux";
import { createStore } from "redux";

// Todo:  Redux Store
// The store is your central collection of data. In the next step, you’ll learn to create reducers that will set the default values and update your store, but for now you will hard-code the data.

const store = createStore ( () => ({
  birds: [
    {
      name: 'robin',
      views: 1
    }
  ]
})) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
