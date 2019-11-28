import React, { useState } from 'react';
import '../login/login.css';
import Api from '../../api/Api';



function Login() {
  const [loginInfo, setLoginInfo] = useState({password: "", email: ""});

  const onSubmitFunction = (e) => {
    e.preventDefault();
    Api.login.post(loginInfo);
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({...loginInfo, [name]: value})
  }

    return (
        <div>
            <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Login</label>
                  <input onChange={onHandleChange} name="email" value={loginInfo.username} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input onChange={onHandleChange} name="password" value={loginInfo.password} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button onClick={onSubmitFunction} type="submit" className="btn btn-primary">Submit</button>
                {/* <button type="submit" className="btn btn-primary">Registration</button> */}
            </form>
        </div>
            
                
            
    )
}

export default Login
