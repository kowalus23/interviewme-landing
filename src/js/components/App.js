import React from 'react';
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import {texts} from "../texts";

import '../../styles/reset.scss';
import '../../styles/components/App.scss';

const App = () => {
  const {navigation, welcome, portfolio, about, contact, footer} = texts;

  return (
    <React.Fragment>
      <Navigation info={navigation}/>
      <Welcome info={welcome}/>
      <Portfolio info={portfolio}/>
      <About info={about}/>
      <Contact info={contact}/>
      <Footer info={footer}/>
    </React.Fragment>
  );
};

export default App;
