
import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [isPatientLogin, setIsPatientLogin] = useState(false);

  const togglePatientLogin = () => {
    setIsPatientLogin((prev) => !prev);
  };

    const navigate = useNavigate
     

  return (
    <StyledWrapper className='flex flex-col gap-[20px]'>
    
    <img src={logo} alt="" />


      <form className="form">
        <p className="form-title">
          {isPatientLogin ? 'Patient Login' : 'Employee Login'}
        </p>

        {/* Patient Login (Only Email) */}
        {isPatientLogin && (
          <div className="input-container">
            <input type="email" placeholder="Enter Your Given ID" />
          </div>
        )}

        {/* Regular Login (Email and Password) */}
        {!isPatientLogin && (
          <>
            <div className="input-container">
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Enter password" />
            </div>
          </>
        )}

        <button type="button" className="submit" onClick={()=>navigate("/dashboard")}>
          {isPatientLogin ? 'Sign in' : 'Sign in'}
        </button>

        <p className="signup-link">

          
          {isPatientLogin ? (
            <a href="#" onClick={togglePatientLogin} className="cursor-pointer no-underline">
              Login as Employee
            </a>
          ) : (
            <a href="#" onClick={togglePatientLogin} className="cursor-pointer no-underline">
              Login as Patient
            </a>
          )}
        </p>
      </form>
    </StyledWrapper>
  );
};



export default Form;
