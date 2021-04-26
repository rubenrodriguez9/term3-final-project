import React from 'react'
import "./DeckPanel.css"


const DeckPanel = (props) => {
  console.log(props.currentDeck.kanji);
    return (
        <div  >
            <nav class="panel"  >
               <p class="panel-heading is-flex" style={{backgroundColor:'#4A4A4A', color: 'white', textAlign: 'center'}} >
                 Deck Statistics
               </p>
               <p class="panel-block container" >
                
                 <div class='column is-5 ' > Total Kanji</div> 
                 <div class='column is-6' ></div>
                 <div class='column is-3 ' > {props.currentDeck.kanji.length}  </div> 
               </p>
               <p class="panel-block">
               <div class='column is-5' > Learned  </div> 
                 <div class='column is-6' ></div>
                 <div class='column is-3 ' > {props.currentDeck.kanji.length}  </div>
                </p>
                <p class="panel-block">
                <div class='column is-5 ' > Favorite  </div> 
                 <div class='column is-6' ></div>
                 <div class='column is-3 ' > {props.currentDeck.kanji.length}  </div>
                </p>
               
            </nav>
        </div>
    )
}

export default DeckPanel
