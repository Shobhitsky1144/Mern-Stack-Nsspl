import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AdminPortfolio from "./AdminPortfolio";
import AdminCaseStudy from "./AdminCaseStudy";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: drawerWidth,
  },

  content: {
    padding: theme.spacing(0, 3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [clickActive, setClickActive] = useState(true);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerItems = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List disablePadding className={classes.drawer}>
        <ListItem
          button
          onClick={() => {
            setClick(false);
            setClickActive(true);
          }}
        >
          <ListItemText primary="Add Portfolio" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setClick(true);
            setClickActive(false);
          }}
        >
          <ListItemText primary="Add Case Study" />
        </ListItem>
      </List>
    </>
  );
  return (
    <div className={classes.root}>
      {/* Drawer for small devices */}
      <Hidden smUp implementation="css">
        <Drawer open={open} onClose={() => setOpen(false)}>
          {drawerItems}
        </Drawer>
      </Hidden>
      {/* Drawer for large devices */}
      <Hidden xsDown implementation="css">
        <Drawer open={open} variant="permanent" onClose={() => setOpen(false)}>
          {drawerItems}
        </Drawer>
      </Hidden>

      <AppBar
        position="fixed"
        color="secondary"
        className={classes.appBar}
        style={{ background: "#1abc9c" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "white" }}
          >
            Nsspl Admin
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography variant="h2">New ReactJs Features!</Typography> */}
        <Typography variant="subtitle1" className="mt-3">
          {clickActive === true ? <AdminPortfolio /> : <AdminCaseStudy />}
        </Typography>
      </main>
    </div>
  );
};

export default Header;
