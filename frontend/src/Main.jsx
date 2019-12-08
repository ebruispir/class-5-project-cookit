import React from 'react';
import EpicMenu from './EpicMenu';
import logo from './cookit.png';
import MainBody from './MainBody';

const Main = () => {
  const links = [
    { label: 'Home', link: '#home', active: true },
    { label: 'About', link: '#about' },
    { label: 'Cookit', link: '#cookit' },
    { label: 'Contact Us', link: '#contact-us' },
  ];
  return (
    <>
      <EpicMenu links={links} logo={logo} />
      <MainBody />
    </>
  );
};

export default Main;
