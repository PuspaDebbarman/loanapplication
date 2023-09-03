import React, { useState} from 'react';
import './loginPage.css';
import {useHistory} from 'react-router-dom'



const LoginPage = () => {

  const [user, setUser]=useState("");
  const [pass, setPass]=useState("");
  const history = useHistory();

  const validate = (e) => {
    if(user.length==0){
      alert("Invalid Form, Username cannot be empty");
      setPass('');  
    }
    else if(pass.length==0){
      alert("Invalid Form, Password cannot be empty");
      setUser('');  
    }
    else {
      setTimeout(() => {
        history.push("/home")
      }, 1000);
    }
  }

  return (
    <div className='cover'> 
        <h1>Login</h1>
        <input type="text" placeholder='username' className='input' onChange={(e => setUser(e.target.value))} value={user}/>
        <input type="password" placeholder='password' className='input' onChange={(e => setPass(e.target.value))} value={pass}/>
        <div className='login-btn' onClick={validate}>Login</div>
    </div>
  )
}

export default LoginPage