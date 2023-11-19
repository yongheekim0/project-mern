const LogInToggle = ({handleToggle , logInPage}) => {
  
  return (
    <>
    {logInPage ? <button onClick={handleToggle}>Sign Up</button> : <button onClick={handleToggle}>Log In</button>}
    </>
  )
}

export default LogInToggle