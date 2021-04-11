import React from 'react'

const NavBar = () => {

    return (

        <div>
            
            <nav class="navbar" style={{backgroundColor:'#4A4A4A'}} role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <span class="navbar-item" href="https://bulma.io">
      <img src="https://www.flaticon.com/svg/vstatic/svg/619/619044.svg?token=exp=1618032733~hmac=e43e1f1d51179eb875a3976b3b5fd580" width="112" height="28"/>
    </span>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample"  class="navbar-menu">
    <div class="navbar-start">
      <a style={{color: "#FFFFFF"}} class="navbar-item">
        Home
      </a>

      <a style={{color: "#FFFFFF"}} class="navbar-item">
        Documentation
      </a>

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
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
        

        </div>
    )
}

export default NavBar
