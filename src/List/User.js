import "./User.css"
const User=({name,age,Sex})=>{
    return(
    <div className = "user-container">
        <div className="name">{name}</div>
        <div className="details">
            <span>
             {age}
            </span>
            <span>
            {Sex}
            </span>
        </div>
    </div>
    )
}
export default User;