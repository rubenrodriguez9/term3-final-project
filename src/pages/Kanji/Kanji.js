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
    const [search, setSearch] = useState('')
    const [errorToggle, setErrorToggle] = useState(false)
    const [flashCards, setFlashCards] = useState([])

    const handleKanjiAPI = async () => {      

        setErrorToggle(false)


        try {
          let response = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/${search}`,{
          "headers": {
            "x-rapidapi-key": "49e55a8007mshe7f1dd2f9efaf5dp1e5f32jsnfb100af21a58",
            "x-rapidapi-host": "kanjialive-api.p.rapidapi.com"
          }})
          console.log(response);
          if(response.data.length === 0){
            setErrorToggle(true)
          }
          setFlashCards(response.data)
        } catch (error) {
          
        }
       
    }

    const addKanji = async (kanji) => {

        try {
            let response = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,{
            "headers": {
              "x-rapidapi-key": "49e55a8007mshe7f1dd2f9efaf5dp1e5f32jsnfb100af21a58",
              "x-rapidapi-host": "kanjialive-api.p.rapidapi.com"
            }})
            console.log(response);
            // if(response.data.length === 0){
            //   setErrorToggle(true)
            // }
            // setFlashCards(response.data)
          } catch (error) {
            
          };
    }
    return (
        <div className="kanji-container-main">

            <div className="add-button" >
            <button  onClick={() => setToggleModal(!toggleModal)} class="button is-dark">+ Add Kanji</button>
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

              {errorToggle? <p style={{color: 'red'}} >Kanji does not exist or word contains multiple kanji</p>: null}
      <div style={{alignItems: 'center'}} >
      {flashCards.map((item) => {
          return <p onClick={() => addKanji(item.kanji.character)} style={{fontSize: "50px"}} >{item.kanji.character}</p>
        })}
      </div>
              <input class="input" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Text input"/>

              <button onClick={handleKanjiAPI} class="button is-primary">Submit</button> 
              </div>
              </div>
                <button  class="modal-close is-large" aria-label="close"  onClick={() => setToggleModal(!toggleModal)} style={{backgroundColor: 'red',}}></button>
                
              </div> :
              null}

           


        </div>
    )
}

export default withRouter(Kanji)
