import React, { Component } from "react";
import ReactDom from "react-dom";
import './App.css';

class App extends Component {

state = {
  n1: '',
  n2: '',
  result: '',
  sinal: ''
}

handleChange = (event) => {
  this.setState({
    n1: Number(event.target.value)
  })
}

handleChangeTwo = (event) => {
  this.setState({
    n2: Number(event.target.value)
  })
}

mult = () => {
  let {n1, n2} = this.state
  if (n1 && n2 !== ''){
  this.setState({
    result: n1 * n2,
    sinal: '*',
  })}
}

sub = () => {
  let {n1, n2} = this.state
  if (n1 && n2 !== ''){
  this.setState({
    result: n1 - n2,
    sinal: '-'
  })}
}

div = () => {
  let {n1, n2} = this.state
  if (n1 && n2 !== ''){
  this.setState({
    result: n1 / n2,
    sinal: '/'
  })}
}

add = () => {
  let {n1, n2} = this.state
  if (n1 && n2 !== ''){
  this.setState({
    result: n1*n2,
    sinal: '+'
  })}
}

clean = () => {
  let {n1, n2} = this.state
  this.setState({
    result: '',
    n1: '',
    n2: ''
  })
}

 render(){

   return (
     <div>
       <h1> React App Calculadora</h1>
       <div className="inputs">
         <input onChange={this.handleChange} type = "number" value={this.state.n1}/>
         <input onChange={this.handleChangeTwo} type = "number" value={this.state.n2}/>
       </div>
       <div className="box-button">
         <button onClick={this.mult}>*</button>
         <button onClick={this.div}>/</button>
         <button onClick={this.sub}>-</button>
         <button onClick={this.add}>+</button>
         <button onClick={this.clean}>C</button>
       </div>
       <h2> O Resultado é {this.state.result} </h2>
     </div>
   )
  }
}
export default App;
