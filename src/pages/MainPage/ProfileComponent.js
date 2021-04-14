import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import "./ProfileComponent.css"
import jwt_decode from 'jwt-decode'
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom";


const ProfileComponent = (props) => {
  let history = useHistory();
 const handleDeleteDeck = (id) => {


      props.deleteDeck(id)


      let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        console.log(id);
      axios.post(`http://localhost:3001/api/users/delete-deck`,{ 
        email: decoded.email,
        id: id
      })


  }

 const handleOnCLickStudyDeck = (item) => {
   
   history.push({
    pathname: '/study',
    search: '?query=abc',
    state: { detail: item }
  })
 } 
 const [toggleModal, setToggleModal] = useState(false)
  
    return (
      <div  >
      <nav class="panel" >
         <p class="panel-heading " style={{backgroundColor:'#4A4A4A', color: 'white', textAlign: 'center'}} >
           Decks
         </p>
        
         {/* <p class="panel-block">
           Farm deck
          </p> */}
          <div d >
          {props.decks.map((item) => {
            return<p key={item.id} class="panel-block"  >
             <span className="deck-list" >
             <p className='deck-name' onClick={() => handleOnCLickStudyDeck(item)} >{item.name} </p>
             <p className='deck-delete' onClick={() => handleDeleteDeck(item.id)} >Delete</p>
             </span>
  
           </p>
          })}

          </div>
         
          
      </nav>
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
        deleteDeck: (id) => dispatch({type: "DELETE_DECK", id: id})
      }


}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileComponent))
