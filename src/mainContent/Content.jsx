import React from 'react';
// material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  Container
} from '@material-ui/core';
// Sub Components
import TopButton from './TopButton';
import Games from './Games';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: "335px"
  }
}));

const MainContent = props => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TopButton />
      <Games />
    </Container>
  )
}

export default MainContent;
