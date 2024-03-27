import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on You Email</h1>
        <p>Suscribe to our news letter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter