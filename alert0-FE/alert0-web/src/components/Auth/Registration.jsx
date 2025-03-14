import { useForm } from "react-hook-form";
import Submit from "../buttons/submit";

const Registration = ({toggle}) => {
    const {
      register,
      handleSubmit,
      watch,
      setError,
      formState: { errors, isSubmitting },
    } = useForm();
  
    const submitData = async (data) => {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      try {
        const result = await response.json();
        if (!response.ok) {
          if (result.data) {
            console.log('failed to submit Data')
            Object.keys(result.data).forEach((key) => {
              setError(key, {
                type: "server",
                message: result.data[key][0],
              });
            });
          }
        } else {
          alert("Registered successfuly");
        }
      } catch (error) {
        console.log(error);
      }
    };
  return ( 
    <>
    
    <div className="card">
    <form onSubmit={handleSubmit(submitData)}>
          <div className="grid-container">
        
    <div className="sub-wrapper">
                  <label htmlFor="name">Fullname</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-700">{errors.name.message}</p>
                  )}
                </div>
                <div className="sub-wrapper">

                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Email must be in the format: john@example.com'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-700">{errors.email.message}</p>
                  )}
                </div>

                <div className="radio-container">
                  <label htmlFor="gender">Gender</label>
  
                  <div className="radio-wrapper">
                    <div className="">
                      <input
                        type="radio"
                        id="male"
                        value="male"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                      />
                      <label htmlFor="male">Male</label>
                    </div>

                    <div className="">
                      <input
                        type="radio"
                        id="female"
                        value="female"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        id="nonBinary"
                        value="nonBinary"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                      />
                      <label htmlFor="nonBinary">Non-Binary</label>
                    </div>
                  </div>
                {errors.gender && (
                  <p className="text-red-700">{errors.gender.message}</p>
                )}

</div>

    <div className="sub-wrapper">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                        pattern: {
                            value: /^\d{11}$/,
                            message: 'Phone number must be exact 11 digits'
                        }
                    })}
                  />
                  {errors.phone && (<p className="text-red-700">{errors.phone.message}</p>
                  )}
                </div>
                <div className="sub-wrapper">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  ></textarea>
                  {errors.address && (
                    <p className="text-red-700">{errors.address.message}</p>
                  )}
                </div>
                <div className="sub-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                        message: 'Password must be at least 6 characters, include 1 uppercase letter & 1 number'
                      }
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-700">{errors.password.message}</p>
                  )}
                </div>
                <div className="sub-wrapper">
                  <label htmlFor="c_password">Confirm Password</label>
                  <input
                    type="password"
                    id="c_password"
                    {...register("c_password", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === watch("password") || "Password do not match",
                    })}
                  />
                  {errors.c_password && (
                    <p className="text-red-700">{errors.c_password.message}</p>
                  )}
                </div>



                    
                <div className="sub-wrapper">
                  <input
                    type="hidden"
                    value={new Date().toISOString().slice(0, 16)}
                    {...register("created_at", {
                      required: "Date of birth is required",
                    })}
                  />
                  {errors.dob && (
                    <p className="text-red-700">{errors.dob.message}</p>
                  )}
                </div>
                <div className="sub-wrapper">
                  <input type="hidden" value="resident" {...register("role")} />
                </div>
                <div className="sub-wrapper">
                  <input
                    type="hidden"
                    value="residents"
                    {...register("status")}
                  />
                </div>

                <div className="button-container">
                    <Submit name={isSubmitting?  'Registering' : 'Register'}></Submit> 
                    <p className="switch-auth">
             ALready have an account? <a href="./login"> Register</a>
            </p>    
                </div>
    </div>
    
    </form>
    </div>
        
    </>
  )};


  export default Registration;