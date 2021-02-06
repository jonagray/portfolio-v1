import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Info } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

// styles
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import "assets/css/icons.css";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Featured Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/code-parallaxis-page" className={classes.dropdownLink}>
              Code Parallaxis
            </Link>,
            <Link to="/employee-manager-page" className={classes.dropdownLink}>
              Employee Manager
            </Link>,
            <Link to="/lms-portal-page" className={classes.dropdownLink}>
              LMS Portal
            </Link>,
            <Link to="/fmla-leave-page" className={classes.dropdownLink}>
              Metro Leave Assistant
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/assets/documents/resume.pdf"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="View my LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/jonny-graybill/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Check out my Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/jonagray"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="About me"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/profile-page">
            <Button
              color="transparent"
              className={classes.navLink}           
            >
              <i className={classes.socialIcons + " fa fa-user"} id="about-me" />
            </Button>
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Email me"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="mailto:jon.a.graybill@gmail.com?subject=Mail from Portfolio Site"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " far fa-envelope"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
