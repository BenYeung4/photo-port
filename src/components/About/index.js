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
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus
          ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam
          maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean
          sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi
          tristique justo vel turpis sollicitudin, et tristique velit convallis.
          In hac habitasse platea dictumst. Phasellus mattis nunc sed orci
          consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet
          ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;
