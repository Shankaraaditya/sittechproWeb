/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#about"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#courses"
          color="transparent"
          className={classes.navLink}
        >
          Courses
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#contact"
          color="transparent"
          className={classes.navLink}
        >
          Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="tel:9838580130"
          color="primary"
          className={classes.navLink}
        >
          Call: 9838580130
        </Button>
      </ListItem>
    </List>
  );
}
