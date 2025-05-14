import './Login.css';

const Login = () => (
  <div className='form-container'>
    <form className='form'>
    <h1>Log into your account</h1>
   <input type='text' placeholder='Username'/>
   <input type='text' placeholder='Password'/>
   <button><a href='/homepage'>Login</a></button>
   </form>
  </div>
);
export default Login;