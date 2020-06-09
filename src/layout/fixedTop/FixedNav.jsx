import React from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  AppBar,
  Container,
  Grid,
  useScrollTrigger 
} from '@material-ui/core';
// Sub Components
import AccountInfo from './AccountInfo';
// Background Image
import HomeBG from '../../assets/_background/home_bg.png';
// Banner
import banner from '../../assets/_banner/banner-image3.png';
// Icons
import MessagesIcon from '../../assets/_icon/messages.svg';
import DepositIcon from '../../assets/_icon/deposit.svg';
import WithdrawalIcon from '../../assets/_icon/withdrawal.svg';
import TransferIcon from '../../assets/_icon/transfer.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    width: "100%",
    height: "auto",
    maxWidth: 440,
    background: "#fff",
    backgroundImage: `url("${ HomeBG }")`,
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    boxShadow: "0 2px 5px #ccc"
  },
  container: {
    position: "relative",
    padding: 0
  },
  bannerContainer: {
    width: "100%",
    height: "200px",
    padding: 0
  },
  banner: {
    position: "relative",
    borderRadius: "30px",
    padding: "10px 5px"
  },
  linksContainer: {
    padding: "0 10px",
    width: "100%"
  },
  links: {
    color: "#57B4F7",
    textAlign: "justify"
  },
  divider: {
    margin: "12px auto",
    borderTop: "1px dotted #CAC8C8",
    width: "93%"
  },
  actionsContainer : {
    color: "#5E626C",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  actionLabel: {
    fontSize: "16px"
  },
  actionIcon: {
    width: "26px",
    height: "26px",
    marginRight: "4px"
  },
  gutter: {
    marginBottom: "20px"
  }
}));

const ElevationScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const FixedNav = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar className={classes.navBar} >
          <Container className={classes.container}>
            <div className={classes.bannerContainer}>
              <img src={banner} alt="Home Banner" height="200px" width="100%"  className={classes.banner} />
            </div>
            <div className={classes.linksContainer}>
              <span className={classes.links}>
                Lorem ipsum dolor, sit amet consectetur adipisicing sadEs
              </span> 
            </div>
            <Grid container justify="center" alignItems="center" className={classes.content}>
              <Grid item xs={12}>
                <AccountInfo />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.divider} />
              </Grid>
              <Grid item xs={3} className={classes.actionsContainer}>
                <img src={MessagesIcon} alt="Messages" className={classes.actionIcon} />
                <span className={classes.actionLabel}>MSG</span>
              </Grid>
              <Grid item xs={3} className={classes.actionsContainer}>
                <img src={DepositIcon} alt="Deposit" className={classes.actionIcon} />
                <span className={classes.actionLabel}>DPT</span>
              </Grid>
              <Grid item xs={3} className={classes.actionsContainer}>
                <img src={WithdrawalIcon} alt="Withdraw" className={classes.actionIcon} />
                <span className={classes.actionLabel}>WDW</span>
              </Grid>
              <Grid item xs={3} className={classes.actionsContainer}>
                <img src={TransferIcon} alt="Transfer" className={classes.actionIcon} />
                <span className={classes.actionLabel}>TRNS</span>
              </Grid>
              <Grid item xs={12} className={classes.gutter}></Grid>
            </Grid>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default FixedNav;
