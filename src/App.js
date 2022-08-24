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

  //hooks to delcare the constants near the top of the app function for a single-page application/SPA.
  //set to fales, to prevent the contact form from showing when a user initally navigates to the homepage.  Gallery will display instead, which is what our clients want to see.
  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/*below states that if contactSelected is failse, the Gallery and About components should be rendered. but if contactedSelected is true, the ContactForm component should be rendered.  this is called ternary operator, with the use of ? and :, this supply the false condition to render as well */}
        {/* the extra <> are React fragements or <React.Fragment></React.Fragments>*/}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
