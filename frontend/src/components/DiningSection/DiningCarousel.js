import React from "react";

class DiningCarousel extends React.Component {
  render() {
    return (
      <div
        className="carousel slide col-12 col-sm-11 col-md-9"
        data-ride="carousel"
        id="carousel-1"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100 d-block"
              src="assets/img/c%20(1).jpg"
              alt="Slide Image"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                THE SERENITY CAFE
                <br />
              </h1>
              <p>
                THE SERENITY LODGE - MURREE
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100 d-block"
              src="assets/img/c%20(3).jpg"
              alt="Slide Image"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>MARCO-POLO</h1>
              <p>ATTABAD LAKE YURT LODGE - GULMIT</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100 d-block"
              src="assets/img/c%20(2).jpg"
              alt="Slide Image"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>SARAH'S KITCHEN BY SERENITY</h1>
              <p>
                HINDUKUSH SARAI - CHITRAL
                <br />
              </p>
            </div>
          </div>
        </div>
        <div>
          {}
          <a
            className="carousel-control-prev"
            href="#carousel-1"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="sr-only">Previous</span>
          </a>
          {}
          {}
          <a
            className="carousel-control-next"
            href="#carousel-1"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="sr-only">Next</span>
          </a>
          {}
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carousel-1" data-slide-to={0} className="active" />
          <li data-target="#carousel-1" data-slide-to={1} />
          <li data-target="#carousel-1" data-slide-to={2} />
        </ol>
      </div>
    );
  }
}

export default DiningCarousel;
