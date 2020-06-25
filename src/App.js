import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_WITH_KEY} from './constants'
import styled from 'styled-components'
import StyledContainer from './components/Styles'


function App() {
  const [image, setImage] = useState([])
  const [toggleInfo, setToggleInfo] = useState(false)

  const toggleInfoHandler = event => {
    event.preventDefault()
    setToggleInfo(!toggleInfo)
  }

    useEffect(() => {
      axios.get(`${API_WITH_KEY}`)
        .then(result => {
          setImage(result.data)
        })
    },[])
 
  return (
    <StyledContainer>
      <header>
        <h1>Nasa Picture of the Day: {image.date}</h1>
      </header>
      <main>
        <img src={image.url} alt="nasa of the day" />
        <button onClick={e => {toggleInfoHandler(e)}}>
          {
            toggleInfo ? 'Less Info':'More Info'
          }
        </button>
        {
          toggleInfo && (
            <>
              <div className='button-info'>
                <h2>{image.title}</h2>
                <p>{image.explanation}</p>
              </div>
            </>
          )
        }
      </main>
      
     
    
    </StyledContainer>
    
  );
}

export default App;