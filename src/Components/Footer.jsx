import React from 'react';
import { Link } from 'react-router-dom';
import { Footer as FooterStl } from '../styles/menuWrapperStyles';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const footerSty = { position: 'fixed', bottom: 0 };

function Footer() {
  return (
    <FooterStl>
      <footer data-testid="footer" style={ footerSty } />
      <Link to="/bebidas">
        <img
          src={ drinkIcon }
          alt="Drink Icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar">
        <img
          src={ exploreIcon }
          alt="Explore Icon"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas">
        <img
          src={ mealIcon }
          alt="Food Icon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </FooterStl>
  );
}

export default Footer;
