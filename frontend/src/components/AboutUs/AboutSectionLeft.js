import React from "react";

class AboutSectionLeft extends React.Component {
  render() {
    return (
      <section
        data-aos="fade-right"
        data-aos-duration={500}
        data-aos-delay={100}
        id="section1"
        className="sectionGal"
      >
        <div className="container" id="AboutUs">
          <div className="row">
            <div className="col-sm-6 col-md-7 col-lg-7">
              <h1 className="imageHeading">
                TRAVEL LIKE NEVER BEFORE
                <br />
              </h1>
              <p className="imageCaption">
                Short trip to Nathia or an adventure in Hunza – book a room at
                your favourite location. We understand that travel is personal
                so we make it an easy, feel-good hotel experience for everyone.
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-5">
              <img src="assets/img/photo-1486525546686-3cd5484691f4.jpg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSectionLeft;
