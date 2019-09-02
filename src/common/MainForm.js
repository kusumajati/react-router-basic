import React from 'react'

function MainForm(props) {


    return (
        <div>
            <div>
                <select onChange={props.makeSelection} name="base" value={props.base}>
                    {
                        props.selections ? props.selections.map(currency => <option key={currency} value={currency}>
                            {currency}
                        </option>)
                            : null
                    }
                </select>
                <input onChange={props.changeValue} value={props.value} />
            </div>
            <div>
                <select onChange={props.makeSelection} name="target" value={props.target}>
                    {
                        props.selections ? props.selections.map(currency => <option key={currency} value={currency}>
                            {currency}
                        </option>)
                            : null
                    }
                </select>
                <input disabled={true} value={props.converted} />
                <button onClick={props.button} >Save</button>
                <button onClick={props.button2} >Save2</button>

            </div>
        </div>
    )

}

export default MainForm
