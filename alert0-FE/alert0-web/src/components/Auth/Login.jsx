import React from 'react'
import { useForm } from 'react-hook-form';
import Submit from '../buttons/submit';
export const Login = ({toggle}) => {
        const  { 
            register,
            handleSubmit,
            formState: {errors,isSubmitting}
     }= useForm();
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
                alert(`Login successful${result.message}`)
            }else{
                throw new Error('Something went wrong')
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

                <div className="sub-wrapper">
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
              Don't have an account?{' '}
              <a href="#" onClick={toggle}>
                Register here
              </a>
            </p>
                </div>
            </div>
        </form>
    </div>  
              </>
  )};

  export default Login;
