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

import image1 from "assets/img/lms-portal.png";
import image2 from "assets/img/lms-student-login.png";
import image3 from "assets/img/lms-student-lessons.png";
import image4 from "assets/img/lms-student-lessons-page.png";
import image5 from "assets/img/lms-instructor-login.png";
import image6 from "assets/img/lms-instructor-lessons.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

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
          <h2>Featured Projects</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Landing Page
                    </h4>
                  </div>
                </div>

                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      {/* <LocationOn className="slick-icons" /> */}
                      Student Login
                    </h4>
                  </div>
                </div>

                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Student Lessons Page
                    </h4>
                  </div>
                </div>

                <div>
                  <img
                    src={image4}
                    alt="Fourth slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Student Individual Lesson Page
                    </h4>
                  </div>
                </div>

                <div>
                  <img
                    src={image5}
                    alt="Fifth slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Instructor Login
                    </h4>
                  </div>
                </div>

                <div>
                  <img
                    src={image6}
                    alt="Sixth slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Instructor Individual Lesson Page
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
