import React, {useEffect, useState, useRef } from 'react'
import { withRouter } from "react-router"
import NavBar from '../MainPage/NavBar'
import jwt_decode from 'jwt-decode'
import DeckPanel from './DeckPanel'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import "./Kanji.css"

const Kanji = (props) => {

    const location = useLocation();
    useEffect(() => {
        let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        console.log(location.state.detail); 
    }, [])

    const [toggleModal, setToggleModal] = useState(false)
    const searchKanji = useRef()
    const handleKanjiAPI = async () => {



        let response = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/${searchKanji}`,{
    "headers": {
      "x-rapidapi-key": process.env.REACT_APP_KANJIAPIKEY,
      "x-rapidapi-host": "kanjialive-api.p.rapidapi.com"
    }
  }
  
  )
    }

    return (
        <div className="kanji-container-main">

            <div className="add-button" >
            <button  onClick={() => setToggleModal(true)} class="button is-dark">+ Add Kanji</button>
            </div>

            <div className="kanji-nav-bar" >
            <NavBar />
            </div>

            <div className="kanji-deck-stats" >
            <DeckPanel />
            </div>

            
            {toggleModal ?  <div class="is-active modal" >
              <div class="modal-background"></div>
              <div class="  modal-content">
              <div style={{backgroundColor: 'white'}} >
                  <h2>Deck Name</h2>
              <input ref={searchKanji} onChange={() => console.log(searchKanji.current.value)} class="input is-info"type="text" placeholder="Info input"/>
              <button class="button is-primary">Submit</button> 
              </div>
              </div>
                <button  class="modal-close is-large" aria-label="close" style={{backgroundColor: 'red',}}></button>
              </div> :
              null}

           


        </div>
    )
}

export default withRouter(Kanji)
