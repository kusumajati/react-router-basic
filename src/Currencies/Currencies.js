
import React from 'react'
import {Link} from 'react-router-dom'
import MainForm from '../common/MainForm'
import('../App.css')




class Currencies extends React.Component {

    constructor(props){
        super(props)

        
        this.state = {
            base: "IDR",
            target:"USD",
            value: 0,
            currencies : [],
            converted: 0,
            savedConversion:[],
            savedConversions2:[]
        }
    }
    saveConversion2=()=>{
        this.setState(state=>({
            savedConversions2: [...state.savedConversions2, `${this.state.base} ${this.state.value} = ${this.state.target} ${this.state.converted}, ${Date(Date.now())}` ]
        }))
        console.log(this.state.savedConversions2, 'saved conversion 2')
    }
    componentDidMount(){
        fetch(`https://api.exchangeratesapi.io/latest`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(data=> {
           this.setState({
               currencies:[...Object.keys(data.rates), "EUR" ]
           })
        })
    }
    render(){

        return (
            <div className='App'>
                <MainForm 
                makeSelection={this.makeSelection} 
                base={this.state.base} 
                selections={this.state.currencies}
                changeValue={this.changeValue}
                converted={this.state.converted}
                target={this.state.target}
                button={this.saveConversion}
                button2={this.saveConversion2}
                />
                <Link to={{
                    pathname:`/saved/`,
                    state:{
                        savedConversions: this.state.savedConversion
                    }
                }}>
                Link to Saved Conversions
                </Link>
                <Link to='/'>Back To Home</Link>
                   <h3>{this.props.match.params.string}</h3>
                   <Link to={{
                       pathname:'/saved2',
                       state: {
                           savedConversions2: this.state.savedConversions2
                       }
                   }}>
                   Link to Saved Conversions 2
                   </Link>
            </div>
        )
    }

    saveConversion=()=>{
        this.setState(state=>({
            savedConversion:[...state.savedConversion,`${this.state.base} ${this.state.value} = ${this.state.target} ${this.state.converted}, ${Date(Date.now())}`]
        }))
        alert('conversion saved') 
        console.log(this.state.savedConversion, 'SAVED CONVERSION')
    }

    changeValue = (event) => {
        this.setState({
            value: event.target.value
        }, this.recalculate)
    }

    makeSelection = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, this.recalculate)
    }

    recalculate = () => {
        const value = parseFloat(this.state.value);
        
        if (isNaN(value)) {
            return;
        }

        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                converted: data.rates[this.state.target] * value
            })
        })
    }

//     class App extends React.Component {

//         render() {
//         return (
//             <div>
//          <Duit />    

//         </div>
//          );
//     }
// }
}

export default Currencies
        
        

