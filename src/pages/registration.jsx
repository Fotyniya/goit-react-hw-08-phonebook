import RegisterForm from 'components/RegisterForm/RegisterForm';
import { SubTitle } from './pages.styled';

export default function RegistrationPage() {
  return (
    <div>
        <SubTitle>Registration</SubTitle>
        <RegisterForm />
    </div>
  );
}