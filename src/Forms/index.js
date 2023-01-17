import React from "react";
class FormComponent extends React.Component{
    constructor(){
        super()
        this.state={
            inputText:"",
            showPreview:false
        }
    }
    handlesubmit(event){
        event.preventDefault();
        console.log("Form Submitted")
        this.setState({
            showPreview:true
        })
    }
    handlereset(event){
        event.preventDefault();
        console.log("reset")
        this.setState({
            showPreview:false,
            inputText:" "
        })
    }
    handleOnChange(value){
        this.setState({
            inputText:value
        })
    }
    render(){
        return(
            <div className="form-container">
        <form
            onSubmit={(event)=>this.handlesubmit(event)}
            onReset = {(event)=>this.handlereset(event)}
            >
            <input placeholder="enter something"
            type = "text" value = {this.state.inputText}
            onChange={(event)=>this.handleOnChange(event.target.value)} />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
        {this.state.showPreview && (
            <div>
            <h2>Preview form</h2>
        <p>{this.state.inputText}</p>
        </div>)}
        
        </div>
        )
    }
}
export default FormComponent