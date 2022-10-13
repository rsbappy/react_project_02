import React from 'react'
import { Link } from 'react-router-dom';

function header() {
  return (
    <div>
         <div id="header">
      <div id="logo">
        <div id="logo_text">
          {/* <!-- class="logo_colour", allows you to change the colour of the text --> */}
          <h1><a href="index.html">colour<span class="logo_colour">blue</span></a></h1>
          <h2>Simple. Contemporary. Website Template.</h2>
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
          {/* <!-- put class="selected" in the li tag for the selected page - to highlight which page you're on --> */}
          <li class="selected"><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Examples'}>Examples</Link></li>
          <li><a href="page.html">A Page</a></li>
          <li><a href="another_page.html">Another Page</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>

    </div>
  )
}

export default header