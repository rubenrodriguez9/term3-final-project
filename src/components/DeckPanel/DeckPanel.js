import React from 'react'
import "./DeckPanel.css"

const DeckPanel = () => {
    return (
        <div  >
            <nav class="panel" >
               <p class="panel-heading " style={{backgroundColor:'#4A4A4A', color: 'white', textAlign: 'center'}} >
                 Stats
               </p>
               <a class="panel-block">
                 Total Decks
               </a>
               <a class="panel-block">
                 Favorite Decks
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

export default DeckPanel
