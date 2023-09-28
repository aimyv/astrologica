import React from 'react'

export default function index({zodiac, day, result}) {
    return (
        <div>
            {zodiac.toUpperCase()}
            <br />
            {day.charAt(0).toUpperCase() + day.slice(1)}'s Horoscope
            <br /><br />
            {result}
        </div>
    )
}
