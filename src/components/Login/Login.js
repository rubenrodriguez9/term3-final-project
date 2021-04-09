import {useState} from 'react'
import DropDownButton from '../DropDownButton/DropDownButton'
import NavBar from '../NavBar/NavBar'  
import ProfileComponent from '../Profile/ProfileComponent'
import Footer from '../Footer/Footer'
import DeckPanel from '../DeckPanel/DeckPanel'

import './Login.css'

const Login = () => {
  
  let styles = {
    
    textAlign: 'center',
    marginRight: '20px',
    width: '700px',
    height: '700px',
  };

    return (
        <div>
          <NavBar />
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div >
          <ProfileComponent  />
          </div>
          <div>
          <div >
          <DeckPanel  />
          </div>
          </div>
          <div>
            <Footer />
          </div>
         </div>
    )
}
export default Login
