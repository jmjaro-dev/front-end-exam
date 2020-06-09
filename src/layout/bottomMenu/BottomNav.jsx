import React, { useState } from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
// Icons
import ActiveHomeIcon from '../../assets/_icon/home_on.svg';
import HomeIcon from '../../assets/_icon/home.svg';
import ActivePromotionIcon from '../../assets/_icon/promotion_on.svg';
import PromotionIcon from '../../assets/_icon/promotion.svg';
import ActiveCustomerServiceIcon from '../../assets/_icon/customer-service_on.svg';
import CustomerServiceIcon from '../../assets/_icon/customer-service.svg';
import ActiveProfileIcon from '../../assets/_icon/profile_on.svg';
import ProfileIcon from '../../assets/_icon/profile.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    height: "64px !important",
    width: "100%",
    maxWidth: 440,
    background: "#fff",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    boxShadow: "0 0 5px #ccc"
  },
  container: {
    padding: 0
  },
  label: {
    fontSize: "16px"
  },
  icons: {
    width: "26px",
    height: "26px",
    marginRight: "4px"
  },
}));

const BottomNav = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<img src={value === 0 ? ActiveHomeIcon : HomeIcon} alt="Home" className={classes.icons}/>} />
      <BottomNavigationAction label="Promotion" icon={<img src={value === 1 ? ActivePromotionIcon : PromotionIcon} alt="Promotion" className={classes.icons} />} />
      <BottomNavigationAction label="Help Desk" icon={<img src={value === 2 ? ActiveCustomerServiceIcon : CustomerServiceIcon} alt="Help Desk" className={classes.icons} />} />
      <BottomNavigationAction label="Profile" icon={<img src={value === 3 ? ActiveProfileIcon : ProfileIcon} alt="Profile" className={classes.icons} />} />
    </BottomNavigation>
  )
}

export default BottomNav;
