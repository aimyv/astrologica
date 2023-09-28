import './style.css'
import { Form, Result } from './components'
import { useState } from 'react'

export default function App() {
  let [zodiac, setZodiac] = useState('aries')
  let [day, setDay] = useState('today')
  let [result, setResult] = useState(null)
  let [show, setShow] = useState(false)
  return (
    <div className="App">
      <div className='container'>
        <h1>ASTROLOGICA</h1>
        <Form zodiac={zodiac} setZodiac={setZodiac} day={day} setDay={setDay} setResult={setResult} setShow={setShow}/>
      </div>
      <br />
      {show && <Result zodiac={zodiac} day={day} result={result}/>}
    </div>
  );
}
