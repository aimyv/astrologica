import React from 'react'
import './style.css'

export default function index({zodiac, day, result}) {
    return (
        <div id='description'>
            <div id='sign'>{zodiac.toUpperCase()}</div>
            <div id='current_day'>✦ {day.charAt(0).toUpperCase() + day.slice(1)} ✦</div>
            <br />
            <div id='reading'>{result}</div>
        </div>
    )
}
