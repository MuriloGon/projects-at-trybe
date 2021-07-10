import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper } from '../styles/menuWrapperStyles';
import Header from './Header';
import Footer from './Footer';

const Main = ({ children, name, header = false, footer = false, search = false }) => (
  <MenuWrapper>
    {!header && <Header name={ name } search={ !search } />}
    <MenuWrapper.Main>
      {children}
    </MenuWrapper.Main>
    {!footer && <Footer />}
  </MenuWrapper>
);

Main.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  search: PropTypes.bool,
  footer: PropTypes.bool,
}.isRequired;

export default Main;
