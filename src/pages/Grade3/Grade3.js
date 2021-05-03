import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Grade3 = () => {

  useEffect(() => {
      getKanji()

  }, [])

  const [kanji, setKanji] = useState([])
  const [apiKanji, setApiKanji] = useState('')


  const getKanji = async () => {
       
    let success = await axios.get(`https://kanjiapi.dev/v1/kanji/grade-3`)
    setKanji(success.data)
  }

  const getKanjiMeaning = async (item, i) => {
    console.log(i);
    let success = await axios.get(`https://kanjiapi.dev/v1/kanji/${item}`)
    setApiKanji(success.data.meanings[0])


  }


    return (
        <div className="grid-grade-container" >

            {kanji.map((item) => {
             return <div onMouseEnter={() => getKanjiMeaning(item)} class="flip-card  " > 
                    <div class="flip-card-inner">
                        <div  class="flip-card-front">
                            {/* <img src={} className='kanji-img' /> */}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                           <h1 style={{fontSize: "50px"}} >{item}</h1> 
                        </div>
                        <div  class="flip-card-back"> 
                        <br></br>
                            <br></br>
                            <br></br>
                            <h1 style={{fontSize: "40px"}}>{apiKanji}</h1> 
                            {/* <p> Kunyomoi:  {} </p>  */}
                            {/* <p> Onyomi:  {} </p> */}
                        </div>
                    </div>
                        </div> 
            })}
            
        </div>
    )
}


export default Grade3
