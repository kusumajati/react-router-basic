import React from 'react'

class Saved extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {
                    // this.props.location.state.savedConversions ?
                    this.props.location.state.savedConversions.map(savedConversion=>{
                        return(
                            <p>{savedConversion}</p>
                        )
                    })
                    // : null
                }
            </div>
        )
    }

}

export default Saved