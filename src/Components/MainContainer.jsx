import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Main = ({ children, header = true, footer = true, search = true }) => (
  <>
    {header && <Header name="Início" renderSearchButton={ search } />}
    <main>
      {children}
    </main>
    {footer && <Footer />}
  </>
);

Main.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  search: PropTypes.bool,
  footer: PropTypes.bool,
}.isRequired;

export default Main;
