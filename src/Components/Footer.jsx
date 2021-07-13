import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Footer as FooterStl } from '../styles/menuWrapperStyles';
import drinkIcon, { ReactComponent as DrinkIcon } from '../images/drinkIcon.svg';
import exploreIcon, { ReactComponent as ExploreIcon } from '../images/exploreIcon.svg';
import mealIcon, { ReactComponent as MealIcon } from '../images/mealIcon.svg';

const footerSty = () => ({ position: 'fixed', bottom: 0 });

function Footer() {
  const { primary1, secondary1 } = useTheme();
  const { meals, explore, drinks } = useSelector((st) => st.currentNavigation);
  const styleActive = (bool) => ({ color: bool ? secondary1 : primary1 });
  return (
    <FooterStl data-testid="footer" style={ footerSty() }>
      <div className="blur-background" />
      <FooterStl.Wrapper>
        <Link to="/bebidas">
          <DrinkIcon
            src={ drinkIcon }
            data-testid="drinks-bottom-btn"
            style={ styleActive(drinks) }
          />
        </Link>
        <Link to="/explorar">
          <ExploreIcon
            src={ exploreIcon }
            data-testid="explore-bottom-btn"
            style={ styleActive(explore) }
          />
        </Link>
        <Link to="/comidas">
          <MealIcon
            src={ mealIcon }
            data-testid="food-bottom-btn"
            style={ styleActive(meals) }
          />
        </Link>
      </FooterStl.Wrapper>
    </FooterStl>
  );
}

export default Footer;
