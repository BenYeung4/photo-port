import React from "react";

//The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

//The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.

import { render, cleanup, fireEvent } from "@testing-library/react";

//import the extend-expect library from the jest-dom package
import "@testing-library/jest-dom/extend-expect";

//import the component we will be testing, which is the About component.
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

//calling the cleanup function using the afterEach global function from Jest.  Makes sure that after each test, we wont have any leftoer memory data that could give us false results.
afterEach(cleanup);

//describe function to declare the componet we're testing
describe("Nav component", () => {
  // baseline test
  //we using the "it" function, a string delares what is being tested.  second argument, a callback funciton runs the test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });

  // snapshot test
  //test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );

    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//test for Emoji visibility
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    //Arrange

    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    //Assert
    expect(getByLabelText("camera")).toHaveTextContent("????");
  });
});

//test if some of the links are visible, to ensure that the user can navigate properlty to different parts of the application

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    //weve included the data-testid="link" attribute to Nav/index.js under the href="/".   also placed data-testid="about" under href="#about"
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );

    // Assert
    //below is the calling of the data-testid that weve placed in the Nav/index.js
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});

describe("onClick events", () => {
  it("calls the click handler when clicked", () => {
    const { getByText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    fireEvent.click(getByText("About me"));
    fireEvent.click(getByText("Contact"));
    fireEvent.click(getByText("Portraits"));

    expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
  });
});
