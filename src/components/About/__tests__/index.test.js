import React from "react";

//The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

//The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";

//import the extend-expect library from the jest-dom package
import "@testing-library/jest-dom/extend-expect";

//import the component we will be testing, which is the About component.
import About from "..";

//calling the cleanup function using the afterEach global function from Jest.  Makes sure that after each test, we wont have any leftoer memory data that could give us false results.
afterEach(cleanup);

//describe function to declare the componet we're testing
describe("About component", () => {
  // First Test
  //we using the "it" function, a string delares what is being tested.  second argument, a callback funciton runs the test
  it("renders", () => {
    render(<About />);
  });

  // Second Test (test case)
  //compare snapshot versions of the DOM node structure.  Snapshot is a serilized verision of the DOM node structure, enabled by JEST
  it("matches snapshot DOM node structure", () => {
    // render About
    //asFragment - returns a snapshot of the About component
    const { asFragment } = render(<About />);
    //test and compare wheather the expected and actual outcomes match.  expect function is a matcher to assert somethign about a value
    expect(asFragment()).toMatchSnapshot();
  });
});

//will create folder src/components/About/__tests__/__snapshots__/index.test.js.snap - this is a serialized version of the component's nod structure, which includes elements, attributes, and text content.
