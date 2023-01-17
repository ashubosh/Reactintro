import User from './User'
import './style.css'
import UserList from "./User.json";
const ListComponent = ()=>{
return(
    <div className = "User-List">
    <h2>List of Users:</h2>
    {
    UserList.map( ({name,age,Sex},index)=>

    <User name = {name} age={age} Sex={Sex} key={index}/>)
    }
    
    </div>
)
}
export default ListComponent;