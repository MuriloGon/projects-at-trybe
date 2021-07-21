import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Header as HeaderContainer } from '../styles/menuWrapperStyles';
import SearchBar from './SearchBar';
import profileSrc, { ReactComponent as ProfileIcon } from '../images/profileIcon.svg';
import searchSrc, { ReactComponent as SearchIcon } from '../images/searchIcon.svg';

const profileCb = ({ currentNavigation }) => currentNavigation.profile;
function Header({ name, search }) {
  const [toggleSearch, setToggleSearch] = useState(false);
  const profile = useSelector(profileCb);
  const { primary1, secondary1 } = useTheme();

  const handleToggle = () => { setToggleSearch((st) => !st); };
  const style = (bool) => ({ color: bool ? secondary1 : primary1 });

  return (
    <>
      <HeaderContainer style={ { height: '50px' } }>
        <div className="blur-background" />
        <HeaderContainer.Wrapper>

          <Link to="/perfil">
            <ProfileIcon
              data-testid="profile-top-btn"
              style={ style(profile) }
              src={ profileSrc }
            />
          </Link>

          <HeaderContainer.Title
            data-testid="page-title"
          >
            {name}
          </HeaderContainer.Title>

          {search && (
            <SearchIcon
              src={ searchSrc }
              style={ { ...style(toggleSearch), cursor: 'pointer' } }
              data-testid="search-top-btn"
              onClick={ handleToggle }
            />
          )}
        </HeaderContainer.Wrapper>
      </HeaderContainer>

      <CSSTransition
        in={ toggleSearch }
        timeout={ 300 }
        classNames="categories-bar"
        unmountOnExit
        mountOnEnter
      >
        <SearchBar />
      </CSSTransition>
      )
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
