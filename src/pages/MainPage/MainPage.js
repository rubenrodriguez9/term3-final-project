import React, {useEffect} from 'react'
import test from '../../../src/test.png'
import DeckPanel from "./DeckPanel"
import NavBar from './NavBar'
import ProfileComponent from './ProfileComponent'
import "./MainPage.css"


const MainPage = (props) => {

    // useEffect(() => {

    //     if(window.localStorage.getItem.jwtToken === undefined){
    //         props.history.push('/')
    //     }
      

    // }, [])



    return (
        
        <div className="container">

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
            <button class="button is-dark">+ Add Deck</button>
            </div>

            
            
        </div>
    )
}

export default MainPage
