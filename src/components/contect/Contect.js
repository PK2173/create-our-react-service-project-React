import React from 'react'
import './countect.css'

export default function Contect() {
  return (
    <div className='contectcontainer'>
      <div className="colection">
        <h1>Contact Us</h1>
        <div className="inputtages">
          <label>Full Name</label>
          <input type="text" placeholder='Full Name' />
          <label>Phone</label>
          <input type="tel" placeholder='Phone' />
          <label>Email Address</label>
          <input type="email" placeholder='Email Address' />
          <label>Massage</label>
          <textarea cols="30" rows="10" placeholder='Wright you message here'></textarea>
        </div>
        <button className='btntag btcon'>Submit From</button>
      </div>
    </div>
  )
}
