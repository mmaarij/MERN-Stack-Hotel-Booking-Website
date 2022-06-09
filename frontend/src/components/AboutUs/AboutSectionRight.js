import React from "react";

class AboutSectionRight extends React.Component {
  render() {
    return (
      <section
        data-aos="fade-left"
        data-aos-duration={700}
        data-aos-delay={150}
        id="section2"
        className="sectionGal"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-7 col-lg-7" id="image2Caption-1">
              <h1 className="imageHeading">YOUR ADVENTURE COMPANION</h1>
              <p className="imageCaption">
                Travelling doesn't have to be the hassle everyone makes it out
                to be. Book a room at Serenity and help us manage your holiday
                while you focus on what matters - having fun.
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-5">
              <img src="assets/img/happy-camping.jpg" />
            </div>
            <div
              className="col-sm-6 col-md-7 col-lg-7"
              id="image2Caption"
              style={{
                marginTop: "0px"
              }}
            >
              <h1 className="imageHeading">YOUR ADVENTURE COMPANION</h1>
              <p className="imageCaption">
                Travelling doesn't have to be the hassle everyone makes it out
                to be. Book a room at Serenity and help us manage your holiday
                while you focus on what matters - having fun.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSectionRight;
