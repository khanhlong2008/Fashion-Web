import { useNavigate } from 'react-router-dom';
const Logout=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("accessToken")
        navigate.replace("/");
    }
    return(
        <div>
            <h1>Hello Homepage</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Logout;