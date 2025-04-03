import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";
const LoginAuth = () => {
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitData = async (data) => {
    setIsSubmitting(true);
    try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
      if(!response.ok){
        throw new Error('invalid credentials')
      }

      const result = await response.json();
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userID", result.data.id);
        localStorage.setItem("fullName", result.data.message);
        
        if (result.data.role == "resident") {
          if(result.data.approval ===  'Pending'){
            console.log('pending'); 
            navigate("/resident/pending")
          }else{
            console.log('success');
            navigate("/resident/dashboard");
          }
          
        } else if (result.data.role == "admin") {
          navigate("/adminPage/dashboard");
        } else alert("Invalid Account Log in");
      
    } catch (error) {
      console.log(error.mesg);
      alert(error.message)
    } finally {
      setIsSubmitting(false);
    }
  };
  return { submitData, isSubmitting };
};

export default LoginAuth;
