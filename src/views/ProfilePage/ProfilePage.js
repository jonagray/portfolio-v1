import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import School from "@material-ui/icons/School";
import Work from "@material-ui/icons/Work";
import Pets from "@material-ui/icons/Pets";
import EmojiPeople from "@material-ui/icons/EmojiPeople";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/profile1.jpg";
import studio2 from "assets/img/space-needle.jpg";
import studio5 from "assets/img/surfing.jpeg";
import studio4 from "assets/img/pool.jpg";
import work4 from "assets/img/wwu.png";
import work1 from "assets/img/codefellows.png";
import work5 from "assets/img/pos.png";
import work3 from "assets/img/cf-grads.jpg";
import work2 from "assets/img/vikings.png";
import work6 from "assets/img/pos2.png";
import work7 from "assets/img/kc.jpg";
import work8 from "assets/img/horizon.jpg";
import pets1 from "assets/img/friday2.jpg";
import pets2 from "assets/img/blaze.jpg";

// styles
import "assets/css/text-mods.css";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="JG"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/space-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jonny Graybill</h3>
                    <h6>SOFTWARE ENGINEER</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Hailing from Seattle, I am a Full-Stack Software Engineer specializing in JavaScript. I'm most passionate about design, animations, and UI/UX. If there's one thing you need to know about me, it's that I absolutely live for the exciting "breakthrough" moments that come with coding.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Background",
                      tabIcon: EmojiPeople,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <p>
                                Having arrived to the world of programming later than some, I worked in the world of communications before finding my passion for Software Engineering.
                                <br /><br /><br />

                                <img
                                  alt="..."
                                  src={studio2}
                                  className={navImageClasses}
                                />
                                <br />
                                Born and raised in Seattle, WA, I love the Pacific Northwest! I do, however, love the sunshine and am passionate about traveling to beautiful places to catch up on rays that are usually in short supply around here.
                              </p>
                            </span>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <p>
                                Though it's too cold for me to surf in WA, I jump at the chance when visiting California - especially San Diego!
                                <br /><br /><br />
                              </p>

                              <p>
                                As a former year-round competetive Swimmer, one of my favorite things to do is jump in the pool for a quick workout.
                        </p>
                              <br />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </span>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Education",
                      tabIcon: School,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <br /><br />
                              <p>After completing my Associate's Degree at Highline Community College, I took a few years off to live a bit of life, and learn more about "adulting." Following that, I headed up to Western Washington University to finish off my 4-year degree.
                                <br /><br />
                              </p>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <p>
                                Upon completing my Bachelor's degree in Communication Studies with a Minor in Leadership Studies, I found myself back in Seattle - completing a Communications internship at the Port of Seattle's Maritime division. Six months later, this turned into a full-time position, which I worked at for two years.
                                </p>
                              <br />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </span>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <p>
                                It was during my time at the Port of Seattle that I discovered my passion for programming! A corporate communication I worked on required me to learn some basic JavaScript to pair with an HTML/CSS template. I was hooked instantly and absolutely had to learn more.
                            </p>
                              <br />
                              <p>
                                Code Fellows came highly recommended from multiple former-graduates, and I found my experience with them to be stellar as well. 11 months later, after having spent 4 after-work nights per week and every weekend on-campus and completely immersed in code, I graduated from the Advanced JavaScript program.
                              <br /><br />
                              Below is my graduating class - a group of hardworking devs that perservered and refused to quit every time a new error flashed that took hours to debug!
                            </p>
                              <br />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </span>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Experience",
                      tabIcon: Work,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <img
                                alt="..."
                                src={work7}
                                className={navImageClasses}
                              />
                              <p>
                                King Count Metro - Bus Operations
                              <br />
                              HR Specialist
                              <br />
                              Mar 2019 - Current | Seattle, WA
                            </p>
                              <p>Responsibilities:</p>
                              <p className="text-mods">
                                ● Process medical leave for Metro operation employees <br /><br />
                            ● Develop custom software to expedite payroll process for continuous leave management<br /><br />
                            ● Engineer results-oriented software to improve operations and leave tracking <br />
                              </p>
                            </span>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <img
                                alt="..."
                                src={work6}
                                className={navImageClasses}
                              />
                              <p>
                                Port of Seattle - Maritime Environmental
                              <br />
                              Content Coordinator
                              <br />
                              Jun 2017 - Mar 2019 | Seattle, WA
                            </p>
                              <p>
                                Responsibilities:
                            </p>
                              <p className="text-mods">
                                ● Coordinate, edit content, and assist departments with drafting and distribution of official documents and communications requiring compliance with legal guidelines <br /><br />
                            ● Utilize strategic communication to support a team of 20+ with tasks, projects, and departmental marketing for public relations<br />
                              </p>
                            </span>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <img
                                alt="..."
                                src={work8}
                                className={navImageClasses}
                              />
                              <p>
                                Horizon Air - Ground Crew
                              <br />
                              Ground Service Team Captain
                              <br />
                              Jun 2012 - Oct 2015 | SeaTac, WA
                            </p>
                              <p>Responsibilities:</p>
                              <p className="text-mods">
                                ● Balance complex organization schedule of incoming and outgoing aircraft with limited workspaces, staff availability constraints, and equipment restrictions <br /><br />
                            ● Train newly hired employees in learning management system and policies while adhering to tight deadlines <br /><br />
                            ● Prepare reports after exhibiting emergency preparedness in emergency situations
                            </p>
                            </span>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Dogs",
                      tabIcon: Pets,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <p>Friday - German Shepherd, 4yrs</p>
                              <img
                                alt="..."
                                src={pets1}
                                className={navImageClasses}
                              />
                            </span>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <span>
                              <p>Blaze - Golden Doodle, 3yrs</p>
                              <img
                                alt="..."
                                src={pets2}
                                className={navImageClasses}
                              />
                            </span>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
