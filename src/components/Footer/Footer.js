import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styles
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:jon.a.graybill@gmail.com?subject=Mail from Portfolio Site"
                className={classes.block}
              >
                Contact
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/profile-page" className={classes.block}>
                About
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://codeparallaxis.com"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} | Jonny Graybill
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
