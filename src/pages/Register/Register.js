import {useState, useRef} from 'react'
import axios from 'axios'
import test from '../../../src/test.png'
import { withRouter } from "react-router";
import validator from 'validator'
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
  const [emailToggle, setEmailToggle] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)
  const [registerError, setRegisterError] = useState(false)


  const submitRegister = async (e) => {
    e.preventDefault()

    if(emailToggle){
      console.log('bad');
      return
    } else if(validator.isStrongPassword(passwordRef.current.value) === false){
      setPasswordCheck(true)
      
      return
    }
  
    
   try {
    let response = await axios.post(process.env.REACT_APP_CREATEUSER,{
        email: emailRef.current.value,
        password: passwordRef.current.value
        
    })
    let data = await response.data

    console.log('sent');


    alert('User Created!')
    props.history.push('/')
       
   } catch (error) {

    console.log(error);
    if(error.response.status === 409){
      setRegisterError(true)
    }
   }
  }

  const emailCheck = () => {
    if(validator.isEmail(emailRef.current.value) === false){
      setEmailToggle(true)

      console.log(validator.isEmail(emailRef.current.value));
      console.log(emailRef.current.value);
    } else {
      setEmailToggle(false)
    }
   
    
  }

  const handlePasswordCheck = () => {
    setPasswordCheck(false)
    console.log(validator.isStrongPassword(passwordRef.current.value));


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
                    {emailToggle ? <div style={{color: 'red'}}>Please enter a valid email.</div>: null}
                    {passwordCheck ? <div style={{color: 'red'}}>Password must contain one lowercase , uppercase, number and symbol.</div> : null }
                    {registerError ? <div style={{color: 'red'}}>Email Already Taken!</div> : null }
                      <input ref={emailRef} onChange={() => emailCheck() & setRegisterError(false)} class="input is-large" type="email" placeholder="Email"/>  
                    </div>
                  </div>
                  <div class="field"> 
                    <div class="control">    
                      <input ref={passwordRef} class="input is-large" type="password" onChange={handlePasswordCheck} placeholder="Password"/>  
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
