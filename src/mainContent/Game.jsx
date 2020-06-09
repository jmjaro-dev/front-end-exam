import React, { Fragment } from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    margin: "3px 0",
    padding: "10px 0",
    width: "100%",
    height: "125px",
    overflow: "hidden",
    boxShadow: "0 2px 5px #ccc"
  },
  logoContainer: {
    position: "absolute",
    padding: 0,
    top: 0,
    left: 0,
    width: "110px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    transform: "scale(0.3,0.3)"
  },
  logoKY: {
    transform: "scale(0.5,0.5)"
  },
  avatarContainer: {
    position: "absolute",
    padding: 0,
    bottom: 0,
    right: 10,
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    height: "100%"
  },
  gutter: {
    marginTop: "80px"
  }
}));

const Game = ({ info }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {info.name !== "MG Gaming" ? (
        <Grid item xs={12} className={classes.container} style={{ backgroundImage: `url("${info.background}")`, backgroundRepeat: "no-repeat",   backgroundSize: "cover", borderRadius: "20px" }}>
          <span className={classes.logoContainer}>
            <img src={info.logo} alt={info.name} className={info.name === "KY Gaming" ? classes.logoKY : classes.logo} />
          </span>
          <span className={classes.avatarContainer}>
            <img src={info.avatar} alt={info.name} className={classes.avatar} />
          </span>  
        </Grid>
      ) : (
        <Fragment>
          <Grid item xs={12} className={classes.container} style={{ backgroundImage: `url("${info.background}")`, backgroundRepeat: "no-repeat",   backgroundSize: "cover", borderRadius: "20px" }}>
            <span className={classes.logoContainer}>
              <img src={info.logo} alt={info.name} className={info.name === "KY Gaming" ? classes.logoKY : classes.logo} />
            </span>
            <span className={classes.avatarContainer}>
              <img src={info.avatar} alt={info.name} className={classes.avatar} />
            </span>  
          </Grid>
          <Grid item xs={12} className={classes.gutter} />
        </Fragment>
      )}        
    </Fragment>    
  )
}

export default Game;
