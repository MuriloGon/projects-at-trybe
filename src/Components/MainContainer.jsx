import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Main = ({ children, name, header = false, footer = false, search = false }) => (
  <>
    {!header && <Header name={ name } search={ !search } />}
    <main style={ { flex: 1 } }>
      {children}
    </main>
    {!footer && <Footer />}
  </>
);

Main.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  search: PropTypes.bool,
  footer: PropTypes.bool,
}.isRequired;

export default Main;
