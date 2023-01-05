import React from "react";
import "./Counter.css"
class Counter extends React.Component {
constructor(){
    super();
    this.state = {
        Count:0
    }
}
increment(){
    this.setState({
        Count:this.state.Count + 1
    })
}
decrement(){
    this.setState({
        Count:this.state.Count -1
    })
}
changeValue(value){
    this.setState({
        Count:value
    })
}
render(){
    return (
    <div className ="Counter-component">
    <p>Count-{this.state.Count}</p>
    <input type="number" 
    value = {this.state.Count}
    onChange={(event)=>this.changeValue(event.target.value)}>
    </input>
    <button onClick={()=>this.increment()}>+ Increment</button>
    <button onClick={()=>this.decrement()}>- Decrement</button>
    </div>
    )
}

}
export default Counter;