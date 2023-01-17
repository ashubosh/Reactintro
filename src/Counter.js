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
showCounterType(){
    if(this.state.Count%2===0){
        return <span>Even</span>
    }else{
        return <span>Odd</span>
    }
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
    <div className="Counter-type">
        {/* {(this.state.Count%2===1) && <span>Odd</span>}
        {(this.state.Count %2===0) &&<span>Even</span>} */}
        
        {/* {this.state.Count%2===0 ?
        (<span>Even</span>):(<span>Odd</span>)} */}

        {/* {this.showCounterType()} */}
        <span 
        style={{
            display: this.state.Count % 2===0 ? "inline":"none",
        }}
        >
        Even
        </span>

        <span 
        style={{
            display: this.state.Count %2 ===1 ? "inline":"none",
        }}
        >
        Odd
        </span>
    </div>
    </div>
    )
}

}
export default Counter;