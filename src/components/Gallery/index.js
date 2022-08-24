import React from "react";

//using this helper function to capitalize the name value when it is render
import { capitalizeFirstLetter } from "../../utils/helpers";

//using PhotoList component
import PhotoList from "../PhotoList";

//the html under the funciton is actually called JSX, represents HTML in Javascript.
//categories, we using the .map() function, defining the categories in an array above the return statment.  Creating objects that contain each category's na e and short description helps when we use the same data elswehere in the app.
function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;

  //for images need an alt attribute - otherwise React will issue  warning that we're missing the correct asscibility feature.  Need to also include a className to the imag tag, because we want the images to share a grid with other images rather than take up the entire page.
  //PhotoList category - using the currentCategory.name as a prop into the Photolist component from Gallery
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
