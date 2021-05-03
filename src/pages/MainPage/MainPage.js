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

        let response =  await  axios.post(process.env.REACT_APP_GETDECKS,{ 
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
          axios.post(process.env.REACT_APP_ADDDECK,{ 
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
                  <li onClick={() => props.history.push('/grade-1')} ><p> Grade-1 </p></li>
                  <li onClick={() => props.history.push('/grade-2')} ><p> Grade-2 </p></li>
                  <li onClick={() => props.history.push('/grade-3')} ><p> Grade-3 </p></li>
                  <li onClick={() => props.history.push('/grade-4')} ><p> Grade-4 </p></li>
                  <li onClick={() => props.history.push('/grade-5')} ><p> Grade-5 </p></li>
                  <li onClick={() => props.history.push('/grade-6')} ><p> Grade-6 </p></li>
                  <li onClick={() => props.history.push('/grade-7')} ><p> Grade-7 </p></li>
                  <li onClick={() => props.history.push('/grade-8')} ><p> Grade-8 </p></li>
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
