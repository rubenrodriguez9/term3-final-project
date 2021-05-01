import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Grade1 = () => {

  useEffect(() => {
      getKanji()

  }, [])

  const [kanji, setKanji] = useState([])


  const getKanji = async () => {
       
    let success = await axios.get(`https://kanjiapi.dev/v1/kanji/grade-1`)
    setKanji(success.data)
  }


    return (
        <div>
            <button onClick={() => console.log(kanji)} >submit</button>
        </div>
    )
}

export default Grade1
