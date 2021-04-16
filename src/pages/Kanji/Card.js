import React, {useState} from 'react'
import {connect} from 'react-redux'
import "./Kanji.css"
const Card = (props) => {

    const [nextKanji, setNextKanji] = useState(0)
    console.log(props.tempDeck.kanji[0].radical.meaning.english);
    return (
        <div  >
             <div className="kanji-add-button" >
            <button  onClick={() =>(setNextKanji(nextKanji+1))} class="button is-dark">Next</button>
            </div>
            <div className="kanji-add-button" >
            <button  onClick={() =>(setNextKanji(nextKanji-1))} class="button is-dark">previous</button>
            </div>
             <div className='card' class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
     <img src={props.tempDeck.kanji[nextKanji].radical.image} className='kanji-img' />
    </div>
    <div class="flip-card-back">
      
      <p>{props.tempDeck.kanji[nextKanji].radical.meaning.english}</p>
    </div>
  </div>
</div>  
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tempDeck: state.tempDeck
    }
}

export default connect(mapStateToProps)(Card)
