
const initalState = {
    decks : [],
    tempDeck: {},
    
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
    
        case "DELETE_DECK":

        let latestDecks = [...state.decks].filter((item) =>{ 
            return item.id !== action.id
        })

        return {
            ...state,
            decks: latestDecks
        }
        // 
        case "TEMP_DECK":

        console.log(action.deck);


        return {
            ...state,
            tempDeck: action.deck
        }


        case "ADD_KANJI_TO_DECK":
         
            console.log('beginning');

            let newTempDeck = {...state.tempDeck}
            newTempDeck.kanji.push(action.kanji)


        
            return {
                ...state,
                tempDeck:  newTempDeck
            }
       
        case "DELETE_KANJI_FROM_DECK":

            console.log(action.kanji);
            let newKanji = state.tempDeck.kanji.filter((item) => {
               return item.kanji.character !== action.kanji

            })

            console.log(state.tempDeck.kanji);
            console.log(newKanji);
            

            return {
                ...state,
                tempDeck:  {...state.tempDeck,
                                kanji: newKanji
                                }
            }
    }

    return state
}


export default kanjiReducer