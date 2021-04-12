import React, {useEffect} from 'react'

import NavBar from '../../components/NavBar/NavBar'


const MainPage = () => {

    useEffect(() => {

        console.log(window.localStorage.getItem.jwtToken);
      

    }, [])

    return (
        <div>

            <NavBar />
            
        </div>
    )
}

export default MainPage
