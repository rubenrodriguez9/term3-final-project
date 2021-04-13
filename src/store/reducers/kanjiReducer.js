import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { v4 as uuidv4 } from 'uuid'

const initalState = {
    decks : []
}

const kanjiReducer = (state=initalState, action) => {
    switch(action.type){
        case "ADD_DECK":
            let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
            let newDeck = {
                name: action.deckName,
                id: uuidv4(),
                kanji: []
            }
            let newState = {...state}  
            newState.decks.push(newDeck)


               axios.post(`http://localhost:3001/api/users/add-deck`,{ 
                deck: newDeck,
                email: decoded.email
              })




            return {
                ...state,
                decks: newState.decks
            }

         case "GET_DECKS":
            
         let newDecks = action.decks

                    return {
                        ...state,
                        decks: newDecks
                    }

              



              

           
    }

    return state
}


export default kanjiReducer