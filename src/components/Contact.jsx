import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7 forms">
           <form className="animate__animated animate__fadeIn animate__delay-1s">
               <br /> <br />
               <input placeholder="Your name"></input><br /><br />
               <input placeholder="Your message"></input><br /><br />
               <input placeholder="your email"></input><br /><br /><br />
               <button>Submit review</button>
           </form>
          </div>
          <div class="col-lg-5">
            <h1 class="animate__animated animate__tada">Contact us!</h1>
            <p class="para animate__animated animate__fadeIn animate__delay-2s">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;