
import { v4 as uuidv4 } from 'uuid'

const initalState = {
    decks : []
}

const kanjiReducer = (state=initalState, action) => {
    switch(action.type){
        case "ADD_DECK":
          
            let newState = [...state.decks]
            newState.push(action.deckName)

            return {
                ...state,
                decks: newState
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