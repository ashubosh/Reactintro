import React from "react"
class HeadingComponentUsingClass extends React.Component{
    constructor(){
        super()
        console.log("Hello from Constructor")
        this.state = {
          a:2,
        };
        
    }
    componentDidMount(){
      console.log('Componenet is Mounting')
      this.updateVariableValue();
    }
    componenetDidUpdate(){
      console.log('Component is updated')
    }
    componentWillUnmount(){
      console.log('component is unmounted')
    }
    updateVariableValue(){
      console.log('Value is Being Updating')
        setInterval (()=>{
        console.log("Value= ",this.state.a)
        this.setState({
          a:this.state.a+1
        },()=>{
          console.log('Value is updated sucessfully')
        }

        )
        },2000
        )
    }
    render(){
      return( 
      <div>
      <h1>Hello Ashutosh Kumar Singh-{this.props.title}</h1> <br/>{" "}
      <p>Value---{this.state.a}</p>
      </div>);
    }
  }
  export default HeadingComponentUsingClass