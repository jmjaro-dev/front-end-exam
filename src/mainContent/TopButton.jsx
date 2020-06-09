import React from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  Box
} from '@material-ui/core';
// Button
import Button from '../assets/_button/nav-btn.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: "12px 0 0 0",
    height: "60px"
  },
  navBtn: {
    position: "absolute",
    left: 0,
    color: "#fff",
    width: "86px",
    height: "40px",
    background: "transparent",
    backgroundImage: `url("${Button}")`,
    backgroundRepeat: "no-repeat",
    border: "none",
    borderRadius: "30px",
    zIndex: 1
  },
  descContainer: {
    position: "relative",
    width: "100%",
    maxHeight: "86px",
    textAlign: "left"
  },
  desc: {
    position: "absolute",
    top: 6,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "30px",
    padding: "5px 15px 5px 50px",
    zIndex: 0
  }
  
}));

const TopButton = props => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.descContainer}>
        <button className={classes.navBtn}>
          OK
        </button> 
        <span className={classes.desc}>
          Lorem ipsum dolor sit amet asdasdssa 
        </span>
      </Box>
    </Box>
  )
}

export default TopButton;
