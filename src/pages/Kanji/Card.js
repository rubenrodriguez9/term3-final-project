import React, {useState} from 'react'
import {connect} from 'react-redux'
import ReactPlayer from 'react-player'
import "./Kanji.css"



const Card = (props) => {


    
    const [nextKanji, setNextKanji] = useState(0)

    let nextButton = () => {
      
      if(props.tempDeck.kanji[nextKanji+1] === undefined){
          return    
      } else setNextKanji(nextKanji+1)


     }

    const previousButton = () => {
        if(props.tempDeck.kanji[nextKanji-1] === undefined){
            return    
        } else setNextKanji(nextKanji-1)

    }

    return (
       
            <div>

                <div>
                <div class="flip-card"> 
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={props.tempDeck.kanji[nextKanji].radical.image} className='kanji-img' />
                    </div>
                    <div class="flip-card-back"> {/* grid needed here */}           {/* grid needed here */}            {/* grid needed here */}
                        <h1>{props.tempDeck.kanji[nextKanji].radical.meaning.english}</h1> 
                        <p> Kunyomoi:  {props.tempDeck.kanji[nextKanji].kanji.kunyomi.hiragana} </p> 
                        <p> Onyomi:  {props.tempDeck.kanji[nextKanji].kanji.onyomi.katakana } </p>
                    </div>
                </div>
                    </div>

                <div className="kanji-align"  >{/* grid needed here */}            {/* grid needed here */}            {/* grid needed here */}
                    <div>
                        <button onClick={nextButton} class="button is-dark" >Next</button>
                    </div>
                    <div>
                        <button  class="button is-dark">Favorite</button>
                    </div>
                    <div>
                        <button onClick={previousButton} class="button is-dark">Previous</button>
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

const mapDispatchToProps = (dispatch) => {

    return {

    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
