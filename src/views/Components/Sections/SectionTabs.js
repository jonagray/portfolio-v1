import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import { Icon, InlineIcon } from '@iconify/react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import StorageIcon from '@material-ui/icons/Storage';
import DnsIcon from '@material-ui/icons/Dns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// simpleicons
import reduxIcon from '@iconify-icons/simple-icons/redux';
import nextDotJs from '@iconify-icons/simple-icons/next-dot-js';
import jqueryIcon from '@iconify-icons/simple-icons/jquery';
import mysqlIcon from '@iconify-icons/simple-icons/mysql';
import jsonIcon from '@iconify-icons/simple-icons/json';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import postgresqlIcon from '@iconify-icons/simple-icons/postgresql';
import firebaseIcon from '@iconify-icons/simple-icons/firebase';
import expressIcon from '@iconify-icons/simple-icons/express';
import socketDotIo from '@iconify-icons/simple-icons/socket-dot-io';
import microsoftazureIcon from '@iconify-icons/simple-icons/microsoftazure';
import netlifyIcon from '@iconify-icons/simple-icons/netlify';
import herokuIcon from '@iconify-icons/simple-icons/heroku';
import bootstrapIcon from '@iconify-icons/simple-icons/bootstrap';
import digitaloceanIcon from '@iconify-icons/simple-icons/digitalocean';
import nodeDotJs from '@iconify-icons/simple-icons/node-dot-js';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import swiftIcon from '@iconify-icons/simple-icons/swift';
import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import reactIcon from '@iconify-icons/simple-icons/react';
import sassIcon from '@iconify-icons/simple-icons/sass';
import amazonawsIcon from '@iconify-icons/simple-icons/amazonaws';
import githubIcon from '@iconify-icons/simple-icons/github';
import npmIcon from '@iconify-icons/simple-icons/npm';

// styles
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import "../../../assets/css/custom-headers.css";
import '../../../assets/css/icons.css';

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
        </div>
        <h2 className="custom-headers">Specialties</h2>
        <div id="nav-tabs">
          <GridContainer className="wrapper">
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="warning"
                tabs={[
                  {
                    tabName: "Languages",
                    tabIcon: LanguageIcon,
                    tabContent: (
                      <React.Fragment>
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={javascriptIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">JavaScript</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={swiftIcon} className="icon1" />
                            <p className="specialty-text">Swift</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={html5Icon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">HTML</p>
                            </div>
                          </div>

                          <div className="grid1">
                            <Icon icon={css3Icon} className="icon1" />
                            <p className="specialty-text">CSS</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      </React.Fragment>
                    )
                  },
                  {
                    tabName: "Databases",
                    tabIcon: StorageIcon,
                    tabContent: (
                      <React.Fragment>
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={mongodbIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">MongoDB</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={firebaseIcon} className="icon1" />
                            <p className="specialty-text">Firebase</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={postgresqlIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">PostgreSQL</p>
                            </div>
                          </div>

                          <div className="grid1">
                            <Icon icon={mysqlIcon} className="icon1" />
                            <p className="specialty-text">MySQL</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={jsonIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">JSON</p>
                            </div>
                          </div>
                        </GridItem>
                      </GridContainer>
                      </React.Fragment>
                    )
                  },
                  {
                    tabName: "Store/Deploy",
                    tabIcon: CloudUploadIcon,
                    tabContent: (
                      <React.Fragment>
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={githubIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">Github</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={netlifyIcon} className="icon1" />
                            <p className="specialty-text">Netlify</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />

                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={amazonawsIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">AWS</p>
                            </div>
                          </div>

                          <div className="grid1">
                            <Icon icon={microsoftazureIcon} className="icon1" />
                            <p className="specialty-text">Azure</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />

                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={npmIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">NPM</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={herokuIcon} className="icon1" />
                            <p className="specialty-text">Heroku</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />

                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={digitaloceanIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">Digital Ocean</p>
                            </div>
                          </div>
                        </GridItem>
                      </GridContainer>
                      </React.Fragment>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Back-ends",
                    tabIcon: DnsIcon,
                    tabContent: (
                      
                      <React.Fragment>
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={nodeDotJs} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">Node</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={expressIcon} className="icon1" />
                            <p className="specialty-text">Express</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={socketDotIo} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">Socket.io</p>
                            </div>
                          </div>
                        </GridItem>
                      </GridContainer>
                      </React.Fragment>
                    )
                  },
                  {
                    tabName: "Front-ends",
                    tabIcon: KeyboardIcon,
                    tabContent: (
                      <React.Fragment>
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={reactIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">React</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={reduxIcon} className="icon1" />
                            <p className="specialty-text">Redux</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
  
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={nextDotJs} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">Next</p>
                            </div>
                          </div>
  
                          <div className="grid1">
                            <Icon icon={jqueryIcon} className="icon1" />
                            <p className="specialty-text">jQuery</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
  
                      <GridContainer>
                        <GridItem className="inner-grid-container">
                          <div className="grid1">
                            <div>
                              <Icon icon={bootstrapIcon} className="icon1" />
                            </div>
                            <div>
                              <p className="specialty-text">Bootstrap</p>
                            </div>
                          </div>
                          <div className="grid1">
                            <Icon icon={sassIcon} className="icon1" />
                            <p className="specialty-text">Sass</p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <br /><br />
                      </React.Fragment>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
