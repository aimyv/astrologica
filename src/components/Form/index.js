import React from 'react'
import axios from 'axios'
import './style.css'

export default function index({zodiac, setZodiac, day, setDay, setResult, setShow}) {

    function handleZodiac(e) {
        setZodiac(e.target.value)
        setShow(false)
    }

    function handleDay(e) {
        setDay(e.target.value)
        setShow(false)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://cors-proxy4.p.rapidapi.com/',
            params: {
            url: `https://cors-anywhere.herokuapp.com/https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${zodiac}&day=${day}`
            },
            headers: {
            'X-RapidAPI-Key': '8373120048msh675b9783d7e6640p1ed3a9jsn0dde54fef822',
            'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
            }
        };
        const data = await axios.request(options)
        setResult(data.data.data.horoscope_data)
        setShow(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="zodiac" id="zodiac" onChange={handleZodiac}>
                <option value="aries">Aries (March 21 - April 
                19)</option>
                <option value="taurus">Taurus (April 20 - May 20)</option>
                <option value="gemini">Gemini (May 21 - June 20)</option>
                <option value="cancer">Cancer (June 21 - July 22)</option>
                <option value="leo">Leo (July 23 - August 22)</option>
                <option value="virgo">Virgo (August 23 - September 22)</option>
                <option value="libra">Libra (September 23 - October 22)</option>
                <option value="scorpio">Scorpio (October 23 - November 21)</option>
                <option value="sagittarius">Sagittarius (November 22 - December 21)</option>
                <option value="capricorn">Capricorn (December 22 - January 19)</option>
                <option value="aquarius">Aquarius (January 20 - February 18)</option>
                <option value="pisces">Pisces (February 19 - March 20)</option>
            </select>
            <br />
            <select name="day" id="day" onChange={handleDay}>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="tomorrow">Tomorrow</option>
            </select>
            <br />
            <input type='submit' />
        </form>
    )
}
