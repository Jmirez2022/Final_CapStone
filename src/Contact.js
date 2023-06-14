import React from 'react'

function Contact() {
  return (
    <div className='Contact' >
      <form className="ContactForm">
        <h1 className="ContactH1">Contact Us</h1>
        <input type="text" placeholder="Full Name" required="" className="input1"/>
        <input type="text" placeholder="Email Address" required="" className="input1"/>
        <input type="text" placeholder="Text" required="" className="input1"/>
        <button type="submit" className="ContactSubmit">Send</button>
      </form>
    </div>
  )
}

export default Contact 