import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import { NavLinkStyled } from './Navigation.styled'

export default function Navigation () {
    const { isLoggedIn } = useAuth();
  
    return (
      <nav  >
        <NavLinkStyled to="/" >
          Home
        </NavLinkStyled>
        {isLoggedIn && (
          <NavLinkStyled to="/contacts">
            Contacts
          </NavLinkStyled>
        )}
      </nav>
    );
  };

  Navigation.propTypes = {
    isLoggedIn: PropTypes.string.isRequired,
}