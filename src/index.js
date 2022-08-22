//index.js is main entry point for the application
//The ReactDOM library is rendering the App component at the root element in the HTML. You can find the HTML by navigating to the public folder. Under public/index.html the "root", is where React will inject the whole app into whichever element has the "root" id
import React from "react";
//replace ReactDOM replace with react-dom instead of react-dom/client"new version"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//version 18.2.0
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
