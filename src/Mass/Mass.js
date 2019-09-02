import React from 'react'
import {Link} from 'react-router-dom'
import Convert from 'convert-units'

class Mass extends React.Component{


    render(){


        return(
            <div className='App'>
                <h1>Mass Converter</h1>
                <p>{Convert(100).from('lb').to('kg')}</p>
                <Link to='/'>Back To Home</Link>
            </div>
        )
    }
}

export default Mass
