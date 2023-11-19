import LogInForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInToggle from '../../components/LogInToggle/LogInToggle';
import { useState } from 'react';

const AuthPage = ({ setUser }) => {
  const [logInPage, setLogInPage] = useState(true)
  const handleToggle = () => {
    setLogInPage(!logInPage)
  }
  return (
    <main>
      <LogInToggle logInPage = {logInPage} handleToggle = {handleToggle}/>
      {logInPage ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} /> }
      
    </main>
  );
};

export default AuthPage;
