import React from 'react'

function Saved2(props){

    return(
        <div>
            <h1>thiS IS SAVEDConversion 2</h1>
            {
                props.location.state.savedConversions2.map(saved=>{
                    return(
                        <p>
                            {saved}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Saved2