import React from 'react'
import "./ProfileComponent.css"


const ProfileComponent = () => {
    return (
      <div  >
      <nav class="panel" >
         <p class="panel-heading " style={{backgroundColor:'#4A4A4A', color: 'white', textAlign: 'center'}} >
           Decks
         </p>
         <a class="panel-block">
          
           <div> discard pile </div> 
         </a>
         <a class="panel-block">
           Farm deck
          </a>
          <a class="panel-block">
           Total Kanji
          </a>
          <a class="panel-block">
            Favorite Kanji
         </a>
      </nav>
  </div>
    )
}

export default ProfileComponent
