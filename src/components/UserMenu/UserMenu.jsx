import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Container, User, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container >
      <User >{user.email}</User>
      <Button 
        type="button" 
        onClick={() => dispatch(logOut())}
        >
        Logout
      </Button>
    </Container>
  );
};
