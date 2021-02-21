import React from "react";
import wine from '../img/wine.jpg';
import cafe2 from '../img/cafe2.jpg';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img class="imgabout animate__animated animate__fadeIn animate__delay-1s" src={wine} alt="some aesthetic shit" /><br /><br />
          <p class="para animate__animated animate__fadeIn animate__delay-2s">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p class="para animate__animated animate__fadeIn animate__delay-2s">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="animate__animated animate__tada">About us :)</h1>
            <p class="para animate__animated animate__fadeIn animate__delay-2s">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.<br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.<br />
            </p>
            <img class="imgabout animate__animated animate__fadeIn animate__delay-1s" src={cafe2} alt="some aesthetic shit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;