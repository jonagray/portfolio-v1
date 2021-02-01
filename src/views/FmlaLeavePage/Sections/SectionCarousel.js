import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/fmla-leave.png";
import image2 from "assets/img/fmla-hours.png";
import image3 from "assets/img/fmla-summary.png";
import image4 from "assets/img/fmla-calculator.png";
import "assets/css/custom-headers.css";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

// 88191, 21931, 94331, 87385

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <div className={classes.title}>
          <h6 className="carousel-header">Note: Login requires a valid badge number - some options are listed below (no password needed):</h6>
          <p className="carousel-header-text">88191, 21931, 94331, 87385</p>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  {/* <div className="slick-caption">
                    <h4>
                      Login Page
                    </h4>
                  </div> */}
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  {/* <div className="slick-caption">
                    <h4>
                      Dashboard
                    </h4>
                  </div> */}
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  {/* <div className="slick-caption">
                    <h4>
                      Summary of Changes
                    </h4>
                  </div> */}
                </div>

                <div>
                  <img
                    src={image4}
                    alt="Fourth slide"
                    className="slick-image"
                  />
                  {/* <div className="slick-caption">
                    <h4>
                      Calculator
                    </h4>
                  </div> */}
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
