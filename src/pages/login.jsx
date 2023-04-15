import LoginForm from 'components/LoginForm/LoginForm';
import { SubTitle } from './pages.styled';

export default function LoginPage() {
  return (
    <div> 
        <SubTitle>Login</SubTitle>
        <LoginForm />
    </div>
  );
}