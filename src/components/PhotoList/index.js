//useState to set the default values for the array of photos
import React, { useState } from "react";

//importing the Modal component when selecting a photo
import Modal from "../Modal";

//created an array for photos
const PhotoList = ({ category }) => {
  //this const hook is set that the Modal file is invoked only when selected, so we set the default to false.  So the modal only opens when user clicks on the image, which we use in the bottom, where isModalOpen && with the currentPhoto
  const [isModalOpen, setIsModalOpen] = useState(false);

  //useState hook is used to manage the current photo state and make this data ccessible to the Model component
  const [currentPhoto, setCurrentPhoto] = useState();

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

  const toggleModal = (image, i) => {
    // current photo
    //setCurrentPhoto function retrieved data through the click event.  using the spread operator here to add the indexL i key value pair to the current photo state.  currentPhoto now contains the two critical data poitns needed for the modal.
    setCurrentPhoto({ ...image, index: i });
    //click handler is modify so it shows the image info, which sets to true.
    setIsModalOpen(!isModalOpen);
  };

  //which category the user has selected
  return (
    <div>
      {/*using the Model/index.js for the details of the images, this sets taht modalOpens only works when clicked and same for onClose to close.  click is worked with the const toggleModal*/}
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            //src was assigned the required expressions, also namin the images using i. default property is where the image has been saved, to render the image, the default property must be invoked.  but if image does not display, remove default this will display the images
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            //alt is used for accessibility user-assistance devices, such as screen readers, so the images's name was assigned.
            alt={image.name}
            className="img-thumbnail mx-1"
            //onClick makes it that when we click the image, we will use the Modal/index.js model to display the dtail of the image
            onClick={() => toggleModal(image, i)}
            //key attribute was assigned the image's name, value must be a unique string.  the absense of this unique key value will cause an error message.
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
