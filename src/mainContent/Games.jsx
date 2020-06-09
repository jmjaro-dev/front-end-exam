import React from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  Grid
} from '@material-ui/core';
// Sub Component
import Game from './Game';

// Background Images
import BTI_BG from '../assets/_background/BTI_bg.svg'
import IM_BG from '../assets/_background/IM-sports_bg.svg'
import SOCCER_BG from '../assets/_background/sports_bg.svg'
import AG_BG from '../assets/_background/AG_bg.svg'
import EB_BG from '../assets/_background/EB_bg.svg'
import IME_BG from '../assets/_background/IM-esports_bg.svg'
import KY_BG from '../assets/_background/poker_bg.svg'
import CQ_BG from '../assets/_background/CQ_bg.svg'
import PT_BG from '../assets/_background/PT_bg.svg'
import MG_BG from '../assets/_background/MG_bg.svg'
// Logos 
import BTI_LOGO from '../assets/_background/_logos/bti.png'
import IM_LOGO from '../assets/_background/_logos/im_yellow.png'
import SOCCER_LOGO from '../assets/_background/_logos/soccer.png'
import AG_LOGO from '../assets/_background/_logos/ag.png'
import EB_LOGO from '../assets/_background/_logos/ebet.png'
import IME_LOGO from '../assets/_background/_logos/im_red.png'
import KY_LOGO from '../assets/_background/_logos/ky.png'
import CQ_LOGO from '../assets/_background/_logos/cq9.png'
import PT_LOGO from '../assets/_background/_logos/playtech.png'
import MG_LOGO from '../assets/_background/_logos/microgaming.png'
// Avatar Images 
import BTI_AVATAR from '../assets/_background/_top-bg/BTI_bg.png'
import IM_AVATAR from '../assets/_background/_top-bg/IM-sports_bg.png'
import SOCCER_AVATAR from '../assets/_background/_top-bg/sports_bg.png'
import AG_AVATAR from '../assets/_background/_top-bg/AG_bg.png'
import EB_AVATAR from '../assets/_background/_top-bg/EB_bg.png'
import IME_AVATAR from '../assets/_background/_top-bg/IM-esports_bg.png'
import KY_AVATAR from '../assets/_background/_top-bg/poker_bg.png'
import CQ_AVATAR from '../assets/_background/_top-bg/CQ_bg.png'
import PT_AVATAR from '../assets/_background/_top-bg/PT_bg.png'
import MG_AVATAR from '../assets/_background/_top-bg/MG_bg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#f7f7f7",
    height: "100%",
    maxHeight: "100vh"
  },
  container: {
    height: "100%",
    width: "100%"
  }
}));

const Games = props => {
  const classes = useStyles();
  
  const games = [
    {
      name: "BTI",
      background: BTI_BG,
      avatar: BTI_AVATAR,
      logo: BTI_LOGO
    },
    {
      name: "IM Sports",
      background: IM_BG,
      avatar: IM_AVATAR,
      logo: IM_LOGO
    },
    {
      name: "Soccer",
      background: SOCCER_BG,
      avatar: SOCCER_AVATAR,
      logo: SOCCER_LOGO
    },
    {
      name: "Asia Gaming",
      background: AG_BG,
      avatar: AG_AVATAR,
      logo: AG_LOGO
    },
    {
      name: "EBET Casino",
      background: EB_BG,
      avatar: EB_AVATAR,
      logo: EB_LOGO
    },
    {
      name: "IM ESports",
      background: IME_BG,
      avatar: IME_AVATAR,
      logo: IME_LOGO
    },
    {
      name: "KY Gaming",
      background: KY_BG,
      avatar: KY_AVATAR,
      logo: KY_LOGO
    },
    {
      name: "CQ Gaming",
      background: CQ_BG,
      avatar: CQ_AVATAR,
      logo: CQ_LOGO
    },
    {
      name: "Playtech",
      background: PT_BG,
      avatar: PT_AVATAR,
      logo: PT_LOGO
    },
    {
      name: "MG Gaming",
      background: MG_BG,
      avatar: MG_AVATAR,
      logo: MG_LOGO
    },
  ]

  return (
    <div className={classes.container}>
      <Grid container className={classes.root} spacing={2} justify="center" alignItems="center">
        {games.map((game, index) => (
          <Game key={index} info={game} />
        ))}
      </Grid>
    </div>
  )
}

export default Games;
