import React, { Component } from 'react';
import EpicMenu from './EpicMenu';
import FirstSection from './FirstSection';
import '../App.css'
import logo from '../cookit.png';
import Main from './Main';
import RecipeDetails from './RecipeDetails';




class App extends Component {
  render() {
    const links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Cookit', link: '#cookit' },
      { label: 'Contact Us', link: '#contact-us' },

    ];

    return (

      <>
        <EpicMenu links={links} logo={logo} />
        <FirstSection />
        <Main />
        <RecipeDetails/>

      </>

    );
  }
}

export default App;
