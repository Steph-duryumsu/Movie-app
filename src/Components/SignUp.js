import './SignUp.css';

const SignUp = () => {
  return(
  <div className='form-container'>

    <h1 className='header'>Create an account with us</h1>

    <form className='form'>
    <input type='text' placeholder='Username'/>
    <input type='text' placeholder='Email'/>
    <input type='password' placeholder='Password'/>
    <input type='password' placeholder='Confirm password'/>
    <button> <a href='/homepage'>SignUp</a> </button>
    </form>
  </div>
  )
};
export default SignUp;