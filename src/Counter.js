import React from "react";
import "./Counter.css"
class Counter extends React.Component {
constructor(){
    super();
    this.state = {
        Count:0
    }
}
render(){
    return (
    <div className ="Counter-component">
    <p>Count-{this.state.Count}</p>
    <button>+ Increment</button>
    <button>- Decrement</button>
    </div>
    )
}

}
export default Counter;