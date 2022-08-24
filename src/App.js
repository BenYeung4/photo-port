//center of the application, practially the root component, or wrapper component that houses al the other components
import React from "react";
//importing the About section
import About from "./components/About";

//importing the Nav section
import Nav from "./components/Nav";

//importing the Gallery section
import Gallery from "./components/Gallery";

// import logo from "./logo.svg";
import "./App.css";

//the html under the funciton is actually called JSX, represents HTML in Javascript. whatever we put in the <> is what we've created
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
