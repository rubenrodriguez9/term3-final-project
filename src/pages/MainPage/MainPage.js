import React, {useEffect} from 'react'
import test from '../../../src/test.png'
import DeckPanel from '../../components/DeckPanel/DeckPanel'
import NavBar from '../../components/NavBar/NavBar'
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent'
import "./MainPage.css"


const MainPage = (props) => {

    // useEffect(() => {

    //     if(window.localStorage.getItem.jwtToken === undefined){
    //         props.history.push('/')
    //     }
      

    // }, [])



    return (
        <div className="container">

            <div className="grid-item-1" >
            <NavBar />
            </div>
            
            <div className="grid-item-2" >
            <DeckPanel />
            </div>

            {/* <div>
            <ProfileComponent className="grid-item-3" />
            </div> */}

            
            
        </div>
    )
}

export default MainPage
