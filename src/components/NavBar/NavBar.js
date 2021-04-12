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
  <div class="navbar-brand">
   

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample"  class="navbar-menu">
    <div class="navbar-start">
      

      <div class="navbar-item has-dropdown is-hoverable">
        <a  style={{color: "#FFFFFF"}} class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a style={{color: "#FFFFFF"}} class="navbar-item">
            Jobs
          </a>
          <a style={{color: "#FFFFFF"}} class="navbar-item">
            Contact
          </a>
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
          {/* <a class="button is-primary">
            <strong>Sign up</strong>
          </a> */}
          <a  onClick={logout} class="button is-light">
            Log Out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
        

        </div>
    )
}

export default withRouter(NavBar)