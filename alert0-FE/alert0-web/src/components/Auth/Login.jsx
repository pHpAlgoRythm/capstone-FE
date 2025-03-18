import React from 'react'
import { useForm } from 'react-hook-form';
import Submit from '../buttons/submit';
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Login UseForm Hook
        const  { 
            register,
            handleSubmit,
            formState: {errors,isSubmitting}
     }= useForm();

    //  Data Submition Using Fetch and redirection to dashboard
    const navigate = useNavigate();
     const submitData =  async (data) => {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        });
        try {
            const result = await response.json()
            if(response.ok){  
              localStorage.setItem('token', result.data.token);
              localStorage.setItem('userID',result.data.id);
              localStorage.setItem('fullName', result.data.message);


          if(result.data.role == 'resident'){ 
            navigate('/dashboard')
          }else(
          alert('invalid')
          )
            }else{
                // throw new Error('Something went wrong')
                alert('invalid account')
            }
        } catch (error) {
            console.log(error)
        }
     };
  return (
    <>
    <div className="card"> 
        <form onSubmit={handleSubmit(submitData)}>
            <div className="grid-container">

            <div className="sub-wrapper">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-700">{errors.email.message}</p>
                  )}
                </div>

                <div className="sub-wrapper ">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-700">{errors.password.message}</p>
                  )}
                </div>

                <div className="button-container">
                    <Submit type = 'submit' disabled ={isSubmitting} name = {isSubmitting? 'Logging in' : 'Log in' }></Submit>
                    <p className="switch-auth">
              Don't have an account? <a href="./Registration"> Register</a>
            </p>
                </div>
            </div>
        </form>
    </div>  
              </>
  )};

  export default Login;
