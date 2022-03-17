import React from 'react';
import {Link} from 'react-router-dom'
import './create.css'


const CreatAccount = props => {
      return (
            <div className="createAccount_Cadr">

            <Link to="/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" className="create_logo"/>
            </Link>

            <div className="create_account">
                  <h1>Create account</h1>
                  <form action="">
                  <h5>Your name</h5>
                  <input type="text"/>
                  <h5>Email address</h5>
                  <input type="email"/>
                  <h5>Password</h5>
                  <input type="password"/>
                  <span>Passwords must be at least 6 characters.</span>
                  <h5>Re-enter password</h5>
                  <input type="password"/>
                  <button className="create_button">create your Amazon account</button>
                  </form>    
                  <p>Already have an account? <Link to="/login">Sign_In</Link></p>                   
            </div>

      </div>
      );
};


export default CreatAccount;