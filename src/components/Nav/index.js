//useEffect Hook to re-render on a veriable value chagne.  useEffect is an API that reflects the lifecycle methods of the component, such as when the component mounts, unmounts, or updates.  In this case, we'd like the component to re-render when the value updates
import React from "react";

//using the helper to capilize the letters
import { capitalizeFirstLetter } from "../../utils/helpers";

//the html under the funciton is actually called JSX, represents HTML in Javascript.
//categories, we using the .map() function, defining the categories in an array above the return statment.  Creating objects that contain each category's na e and short description helps when we use the same data elswehere in the app.
function Nav(props) {
  //initalizing the category state as an array of a few objects using the useState hook, so we can have option to change teh categories at some point in the future
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/*setContractSelected is based on the user's selection, adding the onclick attribute to assign the state of the contactSelected, in this case ,when About is selected, contactSelected is set to false, and the About component is rednered */}
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            // the currentCategory.name ===category.name means that it will get evaluated, and as long as it is true, then the second bit of the short ciruit, navActive, will be returned.
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
