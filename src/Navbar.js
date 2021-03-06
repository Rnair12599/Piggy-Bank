import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from "react-router-dom";
// import {Link} from 'react-router-dom';
// import { Link } from "@material-ui/core";
// import { Layout, Drawer, Navigation, Content } from "react-mdl";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Collapse timeout="auto" unmountOnExit> */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Piggy Bank
              </Typography>
            </Toolbar>
          </AppBar>
          {/* <List>
          {['Home', 'Expenses', 'Visual Log', 'Ask Piggy', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
          <List>
            <ListItem button component="a" href="http://google.com">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="http://google.com">
              <ListItemText primary="Expenses" />
            </ListItem>
            <ListItem button component="a" href="http://google.com">
              <ListItemText primary="Visual Log" />
            </ListItem>
            <ListItem button component="a" href="http://google.com">
              <ListItemText primary="Ask Piggy" />
            </ListItem>
          </List>
        </Drawer>
        <Drawer />
      {/* </Collapse> */}
    </div>
    // <div style={{ height: "800px", position: "relative" }}>
    //       <Layout fixedDrawer>
    //         <Drawer title="Title">
    //           <Navigation>
    //             <a href="#">Link</a>
    //             <a href="#">Link</a>
    //             <a href="#">Link</a>
    //             <a href="#">Link</a>
    //           </Navigation>
    //         </Drawer>
    //         <Content />
    //       </Layout>
    //       </div>
  );
}

export default Navbar;
