import React from 'react';
import { useForm } from 'react-hook-form';
import LoginAuth from '../services/API/loginAPI';
import { Button, TextField } from '@mui/material';

const Login = () => {
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { submitData, isSubmitting } = LoginAuth();

    return (
        <>
            <div className="p-10 shadow-lg rounded-md bg-white max-w-md mx-auto">
                <form onSubmit={handleSubmit(submitData)}>
                    <div className="flex flex-col gap-4">
                        
                        <TextField
                            {...register("email", { required: "Email is required" })}
                            variant="outlined"
                            type="email"
                            fullWidth
                            label="Email"
                            size="small"
                        />
                        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
                        <TextField
                            {...register("password", { required: "Password is required" })}
                            variant="outlined"
                            type="password"
                            fullWidth
                            label="Password"
                            size="small"
                        />
                        {errors.password && <p className="text-red-700">{errors.password.message}</p>}

                        <Button type="submit" variant="contained" size="small">
                            {isSubmitting ? "Logging in..." : "Login"}
                        </Button>

                        <p className="text-center">
                            Don't have an account? <a href="./Registration" className="text-sky-500">Register</a>
                        </p>
                    </div>
                </form>
            </div>  
        </>
    );
};

export default Login;
