import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ReactPlayer from 'react-player'
import "./Kanji.css"



const Card = (props) => {

    useEffect(() => {

        console.log(props.tempDeck.kanji[props.nextKanji]);
        
    }, [])


   
    
    

    
    let nextButton = async () => {

console.log('hello');
console.log(props.tempDeck.kanji);
      
    if(props.tempDeck.kanji[props.nextKanji+1] === undefined){
          return    
      } else  props.setNextKanji(props.nextKanji+1)

    

     }

    const previousButton = () => {
        if(props.tempDeck.kanji[props.nextKanji-1] === undefined){
            return    
        } else {props.setNextKanji(props.nextKanji-1)
            }

    }

    
    return (
       
            <div>

                <div>

                    {props.tempDeck.kanji[props.nextKanji] ?
                    <div class="flip-card"> 
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={props.tempDeck.kanji[props.nextKanji].kanji.strokes.images[props.tempDeck.kanji[props.nextKanji].kanji.strokes.images.length -1]} className='kanji-img' />
                        </div>
                        <div class="flip-card-back"> 
                            <h1>{props.tempDeck.kanji[props.nextKanji].radical.meaning.english}</h1> 
                            <p> Kunyomoi:  {props.tempDeck.kanji[props.nextKanji].kanji.kunyomi.hiragana} </p> 
                            <p> Onyomi:  {props.tempDeck.kanji[props.nextKanji].kanji.onyomi.katakana } </p>
                        </div>
                    </div>
                        </div> 
                
                : null}
                

                <div className="kanji-align"  >{/* grid needed here */}            {/* grid needed here */}            {/* grid needed here */}
                    <div>
                        <button onClick={previousButton} class="button is-dark" >Previous</button>
                    </div>
                    <div>
                        <button  class="button is-dark">Favorite</button>
                    </div>
                    <div>
                        <button onClick={nextButton} class="button is-dark">Next</button>
                    </div>
                </div>
            </div>
            </div>

            
    )
}

const mapStateToProps = (state) => {
    return {
        tempDeck: state.tempDeck,
        
    }
}


export default connect(mapStateToProps)(Card)
