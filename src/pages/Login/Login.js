import React, {useState, useRef} from 'react'
import test from '../../../src/test.png'
import axios from 'axios'

import './Login.css'

const Login = () => {
  
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
    
    let response = await axios.get(`http://localhost:3001/kanji/api/users`,

      {email: emailRef}


    )
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
                   <div class="title has-text-grey is-5">Not registered? Register <span style={{color: 'blue'}} >here</span> </div>
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
