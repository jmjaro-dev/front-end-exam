import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
// Components
import FixedNav from './layout/fixedTop/FixedNav';
import Content from './mainContent/Content';
import BottomNav from './layout/bottomMenu/BottomNav';

function App() {
  return (
    <div className="App">
      <FixedNav />
      <Container maxWidth="xs" className="mainContainer">
        <Content />
        <BottomNav />
      </Container>
    </div>
  );
}

export default App;