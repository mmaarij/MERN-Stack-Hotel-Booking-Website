import React from "react"; 
import Navbar from "./Navbar"
import BookingForm from "./BookingForm"


class Hero extends React.Component {

  constructor(props) {
    super(props);

    const images = [
      "https://i.ibb.co/fQydQqp/bg7.jpg",
      "https://i.ibb.co/kDNT1pR/bg1.jpg",
      "https://i.ibb.co/GJy944G/bg2.jpg",
      "https://i.ibb.co/y0Wggnr/bg3.jpg",
      "https://i.ibb.co/JtPQNjK/bg4.jpg",
      "https://i.ibb.co/80Z4z12/bg5.jpg",
      "https://i.ibb.co/4YrgbCn/bg6.jpg"
    ];

    this.state = {
      images,
      currentImg: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const {images, currentImg} = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({currentImg: newCurrentImg});
  }

  render() {
    const {images, currentImg} = this.state;
    const urlString = `url('${images[currentImg]}')`; 

    // add   to where-ever 
    // we wanna change background every x secs (x=5000ms rn)

    return (
      <section data-aos="fade" id="hero" style={{backgroundImage: urlString}}>
        <Navbar></Navbar>
        {}
        <h1
          className="text-uppercase text-center text-white LandingTitle"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          CHECK IN TO THE TIME OF YOUR LIFE
          <br />
        </h1>
        {}
        <BookingForm></BookingForm>
      </section>
    );
  }
}

export default Hero;
