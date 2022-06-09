import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        {}
        <footer id="myFooter">
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-12 col-sm-6 col-md-3">
                <h1 id="footerLogo" className="logo">
                  <a href="#">
                    <img id="footerLogoImg" src="assets/img/logoWhite.svg" />
                  </a>
                </h1>
              </div>
              <div className="col-12 col-sm-6 col-md-2 col-md-6">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/#AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/#OurLocations">
                      Our Locations
                      <br />
                    </a>
                  </li>
                  <li>
                    <a href="/#DineIn">Dine In</a>
                  </li>
                  <li>
                    <a href="/#ContactUs">Contact Us</a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#modalSignin">Sign Up</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 social-networks col-md-3">
                <div />
                <a className="facebook" href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a className="google" href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin" />
                </a>

                <form action="#ContactUs">
                <button
                  className="btn btn-primary"
                  style={{
                    marginTop: "20px"
                  }}
                  type="submit"
                >
                  Contact us
                </button>
                </form>

              </div>
            </div>
            <div className="row footer-copyright">
              <div className="col">
                <p>© 2022 Serenity Hotels and Resorts</p>
              </div>
            </div>
          </div>
        </footer>
        {}
      </section>
    );
  }
}

export default Footer;
