import React from 'react'
import "./DeckPanel.css"


const DeckPanel = () => {
    return (
        <div  >
            <nav class="panel" >
               <p class="panel-heading " style={{backgroundColor:'#4A4A4A', color: 'white', textAlign: 'center'}} >
                 Deck Statistics
               </p>
               <p class="panel-block">
                
                 <div> Total Decks </div> 
               </p>
               <p class="panel-block">
                 Favorite Decks
                </p>
                <p class="panel-block">
                 Total Kanji
                </p>
                <p class="panel-block">
                  Favorite Kanji
               </p>
            </nav>
        </div>
    )
}

export default DeckPanel
