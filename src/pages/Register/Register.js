import {useState, useRef} from 'react'
import axios from 'axios'
import test from '../../../src/test.png'
import { withRouter } from "react-router";

import './Register.css'

const Register = (props) => {
  
  let styles = {
    
    textAlign: 'center',
    marginRight: '20px',
    width: '700px',
    height: '700px',
  };

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const submitRegister = async (e) => {
    e.preventDefault()
  
    
   try {
    let response = await axios.post(`http://localhost:3001/api/users/create-user`,{
        email: emailRef.current.value,
        password: passwordRef.current.value
        
    })
    let data = await response.data

    console.log('sent');


    console.log(data);
       
   } catch (error) {
       
   }
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
                  
                   <button onClick={submitRegister} class="button is-block is-dark is-large is-fullwidth">Register</button>
                   <div class="title has-text-grey is-5">Already registered? Login  <span onClick={() => props.history.push('/')} style={{color: 'blue', cursor: 'pointer'}} >here</span> </div>
              </form>
            </div>
           
            
        

               </div>   
              </div> 
           </div>
           
        </div>

         
          
        </div>
    )
}
export default withRouter(Register)
