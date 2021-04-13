import React from 'react'
import {connect} from 'react-redux'
import "./ProfileComponent.css"


const ProfileComponent = (props) => {


  
    return (
      <div  >
      <nav class="panel" >
         <p class="panel-heading " style={{backgroundColor:'#4A4A4A', color: 'white', textAlign: 'center'}} >
           Decks
         </p>
        
         {/* <a class="panel-block">
           Farm deck
          </a> */}

          {props.decks.map((item) => {
            return<a class="panel-block">
             
        <p>{item.name}</p>
           </a>
          })}
          
      </nav>
  </div>
    )
}

const mapStateToProps = (state) => {
  return {
      decks: state.decks
  }
}

export default connect(mapStateToProps)(ProfileComponent)
