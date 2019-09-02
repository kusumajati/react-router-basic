import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function LandingPage(){

    return(
        <div>
        <h1>Conversion Site Landing Page</h1>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/currencies/randomString222222">Convert Currencies</Link>
          </li>

        </ul>
      </nav>
      </div>

    )

}

export default LandingPage
