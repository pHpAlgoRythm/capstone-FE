
import Register from "./Registration";
import { useNavigate } from "react-router-dom";
function Login(){
        const navigate = useNavigate();

        const handleRegisterRedirect = () => {
            navigate('/AuthPage')
        }
    return(
        <>
            <Register
            email={{label: 'Email', type: 'email'}}
            password={{label: 'Password', type: 'password'}}
            />
             <button onClick={handleRegisterRedirect} >Register</button>
        
        </>
    )
};


export default Login;