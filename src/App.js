import './style.css'
import { Form, Result } from './components'
import { useState } from 'react'

export default function App() {
  let [zodiac, setZodiac] = useState('aries')
  let [day, setDay] = useState('today')
  let [result, setResult] = useState(null)
  return (
    <div className="App">
      <div className='container'>
        <h1>ASTROLOGICA</h1>
        <Form zodiac={zodiac} setZodiac={setZodiac} day={day} setDay={setDay} setResult={setResult}/>
      </div>
      <br />
      <Result zodiac={zodiac} day={day} result={result}/>
    </div>
  );
}
