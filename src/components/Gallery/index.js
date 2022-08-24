import React from "react";

//using this helper function to capitalize the name value when it is render
import { capitalizeFirstLetter } from "../../utils/helpers";

//using this import to display image from the commercial folder. using image from the small folder for the Gallery page
import photo from "../../assets/small/commercial/0.jpg";

//the html under the funciton is actually called JSX, represents HTML in Javascript.
//categories, we using the .map() function, defining the categories in an array above the return statment.  Creating objects that contain each category's na e and short description helps when we use the same data elswehere in the app.
//
function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  //for images need an alt attribute - otherwise React will issue  warning that we're missing the correct asscibility feature.  Need to also include a className to the imag tag, because we want the images to share a grid with other images rather than take up the entire page.
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Gallery;
