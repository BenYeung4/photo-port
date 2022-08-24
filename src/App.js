//center of the application, practially the root component, or wrapper component that houses al the other components
import React, { useState } from "react";
//importing the About section
import About from "./components/About";

//importing the Nav section
import Nav from "./components/Nav";

//importing the Gallery section
import Gallery from "./components/Gallery";

//importing the Contact section
import ContactForm from "./components/Contact";

// import logo from "./logo.svg";
import "./App.css";

//the html under the funciton is actually called JSX, represents HTML in Javascript. whatever we put in the <> is what we've created
function App() {
  //initalizing the category state as an array of a few objects using the useState hook, so we can have option to change teh categories at some point in the future
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
