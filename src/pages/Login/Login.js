import React, {useState, useRef} from 'react'
import test from '../../../src/test.png'
import axios from 'axios'
import { withRouter } from "react-router";

import './Login.css'

const Login = (props) => {
  
  let styles = {
    
    textAlign: 'center',
    marginRight: '20px',
    width: '700px',
    height: '700px',
  };

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const submitLogin = async (e) => {
    e.preventDefault()
    console.log('sending');
    
    let response = await axios.post(`http://localhost:3001/api/users/log-in`,{ 
        email: emailRef.current.value,
        password: passwordRef.current.value
      })

      let data = await response.data
      console.log(data);
      window.localStorage.getItem({jwtToken: data})

      props.history.push('/profile')

  }
  

    return (
        <div>
          

          <div class="hero is-fullheight  ">
          <div >    
              <div class="container has-text-centered ">     
               <div class="column is-7 is-offset-2 ">    
               
              
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
            <div class="box">
              <img  src={test}  />  
              <form> 
                  <div class="field"> 
                    <div class="control">   
                  
                    </div>
                  </div> 
                  <div class="field"> 
                    <div class="control">    
                      <input ref={emailRef} class="input is-large" type="email" placeholder="Email"/>  
                    </div>
                  </div>
                  <div class="field"> 
                    <div class="control">    
                      <input ref={passwordRef} class="input is-large" type="password" placeholder="Password"/>  
                    </div>
                  </div>
                  
                   <button onClick={submitLogin} class="button is-block is-dark is-large is-fullwidth">Login</button>
                   <div class="title has-text-grey is-5">Not registered? Register <span onClick={() => props.history.push('/register')} style={{color: 'blue', cursor: 'pointer'}}>here</span> </div>
              </form>
            </div>
           
            
        

               </div>   
              </div> 
           </div>
           
        </div>

         
          
        </div>
    )
}
export default Login
