import React, {useEffect, useState, useRef} from 'react'
import test from '../../../src/test.png'
import DeckPanel from "./DeckPanel"
import NavBar from './NavBar'
import ProfileComponent from './ProfileComponent'
import "./MainPage.css"
import jwt_decode from 'jwt-decode'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import {connect} from 'react-redux'


const MainPage = (props) => {

    useEffect(async() => {
        console.log(props.decks);
        let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))

        let response =  await  axios.post(`http://localhost:3001/api/users/get-decks`,{ 
                email: decoded.email
              })
              

        props.getDecks(response.data.data.decks)

    }, [])


    const [toggleModal, setToggleModal] = useState(false)
    const [deckName, setDeckName] = useState('')

    const deckNameRef = useRef('')
    const handleAddDeckOnSubmit = async () => {
       

        let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        let newDeck = {
            name: deckNameRef.current.value,
            id: uuidv4(),
            kanji: []
        }

        console.log('sending to front ');
        props.addDeck(newDeck)
        console.log('sent to front ');

        console.log(props.decks)
          axios.post(`http://localhost:3001/api/users/add-deck`,{ 
            deck: newDeck,
            email: decoded.email
          })
        deckNameRef.current.value = ""
    }

    return (
        
        <div className="container-main">

           <div className="bread-crumb">
           <nav  class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li onClick={() => props.history.push('/grade-1')} ><p>Grade-1</p></li>
                  <li><a href="#">Grade-2</a></li>
                  <li><a href="#">Grade-3</a></li>
                  <li><a href="#">Grade-4</a></li>
                  <li><a href="#">Grade-5</a></li>
                  <li><a href="#">Grade-6</a></li>
                  <li><a href="#">Grade-7</a></li>
                  <li><a href="#">Grade-8</a></li>
                </ul>
            </nav>
           </div>
            
            {/* <button onClick={() => props.history.push('/grade-1')} class="button is-dark">Submit</button> */}
            

            <div className="nav-bar" >
            <NavBar />
            </div>
            
            <div className="deck-stats" >
            <DeckPanel />
            </div>

            <div className="deck-panel" >
            <ProfileComponent />
            </div>
                         
            <div className="add-button" >
            <button onClick={() => setToggleModal(true)} class="button is-dark">+ Add Deck</button>
            </div>
            

           {toggleModal ?  <div class="is-active modal" >
              <div class="modal-background"></div>
              <div class="  modal-content">
              <div style={{backgroundColor: 'white'}} >
                  <h2>Deck Name</h2>
              <input class="input is-info" ref={deckNameRef} type="text" placeholder="Info input"/>
              <button onClick={handleAddDeckOnSubmit} class="button is-primary">Submit</button> 
              </div>
              </div>
                <button onClick={() => setToggleModal(!toggleModal) } class="modal-close is-large" aria-label="close" style={{backgroundColor: 'red',}}></button>
              </div> :
              null}
            </div>

            
            
       
    )
}


    const mapStateToProps = (state) => {
        return {
            decks: state.decks
        }
    }



    const mapDispatchToProps = (dispatch) => {
        return {
            getDecks: (decks) => dispatch({type: "GET_DECKS", decks: decks}),
            addDeck: (deck) => dispatch({type: "ADD_DECK", deckName: deck})

        }

    }

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
