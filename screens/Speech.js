import React from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import { BrowserRouter, Route, Link,redirect } from 'react-router-dom'


const Speech = () => {
  return (
    <div>
      const transcipt = useSpeechRecognition({})
      <p id='transcript'> Transcript:{transcript}</p>
    </div>
  )
}

export default Speech
