import React from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// images
import image1 from "assets/img/fmla-leave.png";
import image2 from "assets/img/fmla-hours.png";
import image3 from "assets/img/fmla-summary.png";
import image4 from "assets/img/fmla-calculator.png";

//styles
import "assets/css/custom-headers.css";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

// Badge numbers - 88191, 21931, 94331, 87385

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
                </div>

                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>

                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>

                <div>
                  <img
                    src={image4}
                    alt="Fourth slide"
                    className="slick-image"
                  />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
