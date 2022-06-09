import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section
        data-aos="fade-up"
        data-aos-duration={700}
        id="section4"
        className="getintouch"
      >
        <div className="container modern-form">
          <div className="text-center">
            <h4 id="ContactUs">Get in touch</h4>
          </div>
          <hr className="modern-form__hr" />
          <div className="modern-form__form-container">
            <form>
              <div className="form-row">
                <div className="col m-auto col-contact col-12 col-md-6">
                  <div className="form-group modern-form__form-group--padding-r">
                    <input
                      className="form-control form-control-lg input input-tr"
                      type="text"
                      placeholder="Full Name"
                    />
                    <div className="line-box">
                      <div className="line" />
                    </div>
                  </div>
                </div>
                <div className="col col-contact col-12 col-md-6">
                  <div className="form-group modern-form__form-group--padding-l">
                    <input
                      className="form-control form-control-lg input input-tr"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="form-control form-control-lg input input-tr"
                      type="text"
                      placeholder="Phone"
                    />
                    <div className="line-box">
                      <div className="line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <div className="form-group modern-form__form-group--padding-t">
                    <textarea
                      className="form-control form-control-lg input modern-form__form-control--textarea"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <div className="line-box">
                      <div className="line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col text-center">
                  <button className="btn btn-primary submit-now" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
