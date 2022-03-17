import React from 'react';
import {Card,Form, Button, } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './login.css'
import {useHistory} from 'react-router-dom'


const LoginCard = props => {

      // const history = useHistory();
      // // stats -----------------
      // const [email, setEmail]=useState("")
      // const [password, setPassword]=useState("")
     

      // //function--------------
      // const login =(e)=>{
      //       e.preventDefault();
      //       if(email && password ){
      //             myLogin(email,password).then(res=>{
      //                   history.push('/')
      //             })
      //             .catch(error=>{
      //                   alert(error.message)
      //             })
      //       }
      // }
      return (

            <div className="loginCadr">

                  <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" className="login_logo"/>
                  </Link>

                  <div className="login_card">
                        <h1>Sign-In</h1>
                        <form action="">
                        <h5>Email address</h5>
                        <input type="email"/>
                        <h5>Password</h5>
                        <input type="password"/>
                        <button className="signin_button" >Continue</button>
                        </form>                       
                  </div>

                  <div className="newAccount">
                        <span>New to Amazon?</span>
                        <Link to="/register" className="newAmazon">create your Amazon account
                        </Link>
                  </div>
            </div>
      );
};



export default LoginCard;



{/* <Card style={{ width: '23rem', height:"25rem" }} className="card">
                        <Card.Body> 
                              <h1>Sign-In</h1>
                        <Form>
                              <Form.Group controlId="formBasicEmail">
                                    <h5>Email address</h5>
                                    <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                    <h5>Password</h5>
                                    <Form.Control type="password" placeholder="Password" />
                              </Form.Group>
                              <Button variant="primary" type="" className="login_button">
                              Continue
                              </Button>
                        </Form>
                        </Card.Body>
                  </Card> */}