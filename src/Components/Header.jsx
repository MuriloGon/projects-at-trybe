import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { Header as HeaderContainer } from '../styles/menuWrapperStyles';
import SearchBar from './SearchBar';
import profileSrc, { ReactComponent as ProfileIcon } from '../images/profileIcon.svg';
import searchSrc, { ReactComponent as SearchIcon } from '../images/searchIcon.svg';

const profileCb = ({ currentNavigation }) => currentNavigation.profile;
function Header({ name, search }) {
  const [togleSearch, setToggleSearch] = useState(false);
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
              style={ style(togleSearch) }
              data-testid="search-top-btn"
              onClick={ handleToggle }
            />
          )}
        </HeaderContainer.Wrapper>
      </HeaderContainer>

      { togleSearch && <SearchBar /> }
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
  active: PropTypes.bool,
};

Header.defaultProps = {
  active: false,
};

export default Header;
