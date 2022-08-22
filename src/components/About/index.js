import React from "react";
//importing image
import coverImage from "../../assets/cover/cover-image.jpg";

//the html under the funciton is actually called JSX, represents HTML in Javascript.
//for image,just like in html, we set the <> as image and bringing in the src file under the name "coverImage", setting up the .css with style and alt
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
