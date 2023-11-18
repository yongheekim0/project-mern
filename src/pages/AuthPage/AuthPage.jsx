import LogInForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const AuthPage = ({ setUser }) => {
  return (
    <main>
      <SignUpForm setUser={setUser} />
      <LogInForm setUser={setUser} />
    </main>
  );
};

export default AuthPage;
