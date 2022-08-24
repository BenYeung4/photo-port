//useState to set the default values for the array of photos
import React, { useState } from "react";

//created an array for photos
const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green parrot",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Yellow macaw",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pug smile",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pancakes",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burrito",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Scallop pasta",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burger",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Fruit bowl",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green river",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Docks",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Panoramic village by sea",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Domestic landscape",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Park bench",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  //this const sets it that only photos with the selected category appear.
  //goes through each photo in the array, trying to find every photo taht matches the category that was selected by the user.  if photo matches the conditioins, return as currentPhotos.
  const currentPhotos = photos.filter((photo) => photo.category === category);

  //which category the user has selected
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            //src was assigned the required expressions, also namin the images using i. default property is where the image has been saved, to render the image, the default property must be invoked.  but if image does not display, remove default this will display the images
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            //alt is used for accessibility user-assistance devices, such as screen readers, so the images's name was assigned.
            alt={image.name}
            className="img-thumbnail mx-1"
            //key attribute was assigned the image's name, value must be a unique string.  the absense of this unique key value will cause an error message.
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
