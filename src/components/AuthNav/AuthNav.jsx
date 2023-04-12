import { StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledNavLink  to="/registration">
        Register
      </StyledNavLink>
      <StyledNavLink  to="/login">
        Log In
      </StyledNavLink>
    </div>
  );
};
