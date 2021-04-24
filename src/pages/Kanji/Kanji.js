import React, {useEffect, useState, useRef } from 'react'
import { withRouter } from "react-router"
import NavBar from '../MainPage/NavBar'
import jwt_decode from 'jwt-decode'
import DeckPanel from './DeckPanel'
import axios from 'axios'
import "./Kanji.css"
import {connect} from 'react-redux'
import Card from './Card'



const Kanji = (props) => {
  
   
    useEffect(() => {
        let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        console.log(props);
    }, [])

    const [toggleModal, setToggleModal] = useState(false)
    const [search, setSearch] = useState('')
    const [errorToggle, setErrorToggle] = useState(false)
    const [flashCards, setFlashCards] = useState([])
    const [toDeleteKanji, setToDeleteKanji] = useState('null')
    const [nextKanji, setNextKanji] = useState(0)
    const [successNotification, setSuccessNotification] = useState(false)
    


  
    function handleCloseModal() {
      setToggleModal(!toggleModal)
      setSuccessNotification(false)
    }

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
        
let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        try {
            let response = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,{
            "headers": {
              "x-rapidapi-key": process.env.REACT_APP_KANJIAPIKEY,
              "x-rapidapi-host": "kanjialive-api.p.rapidapi.com"
            }})
      
            console.log(props);
           
            axios.post(`http://localhost:3001/api/users/add-kanji`,{ 
                email: decoded.email,
                deck: props.tempDeck,
                  kanji: response.data
         
             })

           

              props.addKanjiToDeck(response.data)
              setSuccessNotification(true)
             
          } catch (error) {
            
          };
    }

    const deleteKanji = async () => {
      console.log(props.tempDeck);
      console.log(props.tempDeck.kanji[nextKanji].kanji.character)
      
      let kanji = props.tempDeck.kanji.filter((item, i) => {
        return i !== nextKanji
      })

      console.log(kanji);

      props.deleteKanjiFromDeck(props.tempDeck.kanji[nextKanji].kanji.character)

     try {
      let decoded = jwt_decode(window.localStorage.getItem("jwtToken")) 

      
      console.log(decoded);

      axios.post(`http://localhost:3001/api/users/delete-kanji`,{ 
                email: decoded.email,
                id: props.tempDeck.id,
                kanji: kanji
                

                 
              })
       
     } catch (error) {
       
     }


      setNextKanji(0)
      
    }
    return (
        <div className="kanji-container-main">

            <div className="kanji-add-button" >
            <button  onClick={() => setToggleModal(!toggleModal)} class="button is-dark">+ Add</button>
            </div>

            <div className="kanji-delete-button" >
            <button onClick={deleteKanji} class="button is-dark">- Delete</button>
            </div>

            <div className="kanji-nav-bar" >
            <NavBar />
            </div>

            <div className="kanji-deck-stats" >
            <DeckPanel />
            </div>
            
            <div className="card" >
              <Card  nextKanji={nextKanji} setNextKanji={setNextKanji}/>
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
            {successNotification ? <div style={{color: 'green'}} > Kanji Added!</div>: null}
              <input class="input" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Text input"/>

              <button onClick={handleKanjiAPI} class="button is-primary">Submit</button> 
              </div>
              </div>
                <button  class="modal-close is-large" aria-label="close"  onClick={handleCloseModal} style={{backgroundColor: 'red',}}></button>
                
              </div> :
              null}

           


        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        tempDeck: state.tempDeck
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
      addKanjiToDeck : (kanji) => dispatch({type: "ADD_KANJI_TO_DECK", kanji: kanji}),
      deleteKanjiFromDeck: (kanji) => dispatch({type: "DELETE_KANJI_FROM_DECK", kanji: kanji})

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Kanji))
