import React from 'react'
import {withRouter} from 'react-router'

const NavBar = (props) => {

  
  const logout = () => {
    window.localStorage.removeItem("jwtToken")
    props.history.push("/")
  }

    return (

        <div>
            <nav class="navbar" style={{backgroundColor:'#4A4A4A'}} role="navigation" aria-label="main navigation">
  
  <div id="navbarBasicExample"  class="navbar-menu">
    <div class="navbar-start">
      

      <div class="navbar-item has-dropdown is-hoverable">
        <p  style={{color: "#FFFFFF"}} class="navbar-link">
         user@3.com
        </p>

        <div class="navbar-dropdown">
          <p class="navbar-item">
            About
          </p>
          <p style={{color: "#FFFFFF"}} class="navbar-item">
            Jobs
          </p>
          <p style={{color: "#FFFFFF"}} class="navbar-item">
            Contact
          </p>
          <hr class="navbar-divider"/>
          <span style={{color: "#FFFFFF"}} class="navbar-item">
            Report an issue
          </span>
        </div>
      </div>
    </div>

   
        
  

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          
          <p  onClick={logout} class="button is-light">
            Log Out
          </p>
        </div>
      </div>
    </div>

  </div>
</nav>
        

        </div>
    )
}

export default withRouter(NavBar)