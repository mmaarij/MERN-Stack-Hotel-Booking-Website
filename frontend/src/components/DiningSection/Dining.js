import React from "react";
import DiningCarousel from "./DiningCarousel";

class Dining extends React.Component {
  render() {
    return (
      <section
        className="d-flex flex-column align-items-center"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={50}
        id="section3"
      >
        <hr id="DineIn" className="modern-form__hr" />
        <h1
          id="section3Heading"
          style={{
            fontFamily: "Abhaya Libre"
          }}
        >
          DINE IN
        </h1>
        <p id="sec3SubTitle">
          discover our in-house restaurants, cafés and eateries 
        </p>
        <DiningCarousel></DiningCarousel>
      </section>
    );
  }
}

export default Dining;
