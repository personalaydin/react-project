import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aktifLogo from '../../src/slide-logos/aktifbank-logo.png';
import boschLogo from '../../src/slide-logos/bosch-logo.png';
import akbankLogo from '../../src/slide-logos/akbank-logo.png';
import arcelikLogo from '../../src/slide-logos/arcelik-logo.png';
import allianzLogo from '../../src/slide-logos/allianz-logo.png';
import bezmiAlemLogo from '../../src/slide-logos/bezmi-alem-logo.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

class DemoCarousel extends Component {
    render() {
        return (
        <Carousel responsive={responsive} swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
         autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .15"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px">
          <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
                IT Müdürü
              </div> 
              <div className="slideItems__wrapper-brand">
                AktifBank Genel
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={aktifLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
          <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
                Front-end Dev…
              </div> 
              <div className="slideItems__wrapper-brand">
                Bosch
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={boschLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
           <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
              Back-end Dev…
              </div> 
              <div className="slideItems__wrapper-brand">
                Akbank
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={akbankLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
           <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
              .net Developer
              </div> 
              <div className="slideItems__wrapper-brand">
                Bezmi Alem Vakıf..
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={bezmiAlemLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
          <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
              Junior .net Dev…
              </div> 
              <div className="slideItems__wrapper-brand">
                AktifBank Genel
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={aktifLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
          <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
              Sales Manager
              </div> 
              <div className="slideItems__wrapper-brand">
                Aliianz
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={allianzLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
           <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
                IT Müdürü
              </div> 
              <div className="slideItems__wrapper-brand">
                Bosch
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={bezmiAlemLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
          <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
                IT Müdürü
              </div> 
              <div className="slideItems__wrapper-brand">
                Bosch
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={akbankLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
          <div className="slideItems">
            <div className="slideItems__wrapper">
              <div className="slideItems__wrapper-title">
                IT Müdürü
              </div> 
              <div className="slideItems__wrapper-brand">
                Bosch
              </div>
              <div className="slideItems__wrapper-logo">
                <img src={aktifLogo} className="" alt="Aktifbank Logo" />
              </div> 
            </div>
          </div>
        </Carousel>
      );
    }
};

export default DemoCarousel;



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';