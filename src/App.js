import './style.css'
import { Form, Result } from './components'
import { useState } from 'react'

export default function App() {
  let [zodiac, setZodiac] = useState('aries')
  let [day, setDay] = useState('today')
  let [result, setResult] = useState(null)
  return (
    <div className="App">
      <h1>ASTROLOGICA</h1>
      <Form zodiac={zodiac} setZodiac={setZodiac} day={day} setDay={setDay} setResult={setResult}/>
      <br />
      <Result zodiac={zodiac} day={day} result={result}/>
    </div>
  );
}
