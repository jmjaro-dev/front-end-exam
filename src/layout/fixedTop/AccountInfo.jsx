import React from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  Box,
  Grid, 
  Typography, 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    height: "40px",
    width: "100%",
    padding: "10px 16px"
  },
  content: {
    paddingBottom: "10px",
    height: "40px",
    width: "100%"
  },
  user: {
    fontSize: "18px",
    color: "#39404D"
  },
  balance: {
    color: "#39404D",
    float: 'right'
  },
  moneyLabel: {
    color: "#FD9F64",
    fontSize: "14px",
    marginRight: "10px"
  },
  moneySign: {
    color: "#FC686F",
    fontSize: "14px"
  },
  accountBalance: {
    color: "#FC686F",
    fontSize: "23px"
  }

}));

const AccountInfo = props => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container justify="center" alignItems="center" className={classes.content}>
        <Grid item xs={6}>
          <Typography className={classes.user}>
            u2tesraki
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.balance}>
            <span className={classes.moneyLabel}>RMB:</span> 
            <span className={classes.moneySign}>￥</span>
            <span className={classes.accountBalance}>44.0</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AccountInfo;
