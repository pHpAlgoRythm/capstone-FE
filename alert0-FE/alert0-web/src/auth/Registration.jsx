import { useForm } from "react-hook-form";
import RegAuth from "../services/API/RegisterAPI";
import { isValidEmail, isValidPhone, isValidPassword } from "../utils/validate";
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const { submitData, isSubmitting } = RegAuth(setError);
  

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-out",
      once: true, 
    });
  }, []);


  // max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
  return (
    <div className="bg-whit min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10  overflow-hidden">

        <div
          className="h-full w-full md:bg-white md:shadow-lg rounded-2xl p-10 "
          data-aos="fade-down"
        >
          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-col justify-center items-center mb-0.5">
              <img src="/images/KCERA.png" alt="KCERA Logo" className="min-h-15 max-h-20 w-auto" />
          
            </div>
            <h1 className="text-base/10  font-bold text-gray-900  uppercase  text-center  mb-2">Register an Account</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <TextField
                  {...register("name", { required: "Fullname is required" })}
                  variant="outlined"
                  type="text"
                  label="Fullname"
                  size="small"
                  fullWidth
                />
                {errors.name && <p className="text-red-700 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <TextField
                  {...register("email", { required: "Email is required", validate: isValidEmail })}
                  variant="outlined"
                  type="email"
                  fullWidth
                  label="Email"
                  size="small"
                />
                {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row {...register("gender", { required: "Gender is required" })}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="non-binary" control={<Radio />} label="Non-Binary" />
                  </RadioGroup>
                </FormControl>
                {errors.gender && <p className="text-red-700 text-sm">{errors.gender.message}</p>}
              </div>

              <div>
                <TextField
                  {...register("phone", { required: "Phone number is required", validate: isValidPhone })}
                  variant="outlined"
                  type="tel"
                  fullWidth
                  label="Phone Number"
                  size="small"
                />
                {errors.phone && <p className="text-red-700 text-sm">{errors.phone.message}</p>}
              </div>

              <div>
                <TextField
                  {...register("password", { required: "Password is required", validate: isValidPassword })}
                  variant="outlined"
                  type="password"
                  fullWidth
                  label="Password"
                  size="small"
                />
                {errors.password && <p className="text-red-700 text-sm">{errors.password.message}</p>}
              </div>

              <div>
                <TextField
                  {...register("c_password", {
                    required: "Confirm password is required",
                    validate: (value) => value === watch("password") || "Passwords do not match",
                  })}
                  variant="outlined"
                  type="password"
                  fullWidth
                  label="Confirm Password"
                  size="small"
                />
                {errors.c_password && <p className="text-red-700 text-sm">{errors.c_password.message}</p>}
              </div>

              <div>
                <TextField
                  {...register("address", { required: "Address is required" })}
                  variant="outlined"
                  multiline
                  rows={1}
                  fullWidth
                  label="Address"
                  size="small"
                />
                {errors.address && <p className="text-red-700 text-sm">{errors.address.message}</p>}
              </div>

              <div className="sm:col-span-2 flex flex-col space-y-2">
                <label htmlFor="approval_id_photo">Approval ID</label>
                <input
                  type="file"
                  id="approval_id_photo"
                  {...register("approval_id_photo")}
                  className="border-2 border-dashed border-gray-300 p-2"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col space-y-2">
                <label htmlFor="approval_photo">Approval Photo</label>
                <input
                  type="file"
                  id="approval_photo"
                  {...register("approval_photo")}
                  className="border-2 border-dashed border-gray-300 p-2"
                />
              </div>

              {/* hidden */}
              <input
              type="hidden"
              value={new Date().toISOString().slice(0, 16)}
              {...register("created_at")}
            />

            <input type="hidden" value="resident" {...register("role")} />
            <input type="hidden" value="N/A" {...register("status")} />
            <input
              type="hidden"
              value="Pending"
              {...register("approval_status")}
            />

              <div className="sm:col-span-2 flex flex-col items-center space-y-2 ">
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  disabled={isSubmitting}
                  sx={
                    {
                      padding: '7px',
                      width: '50%'
                    }
                  }
                >
                  {isSubmitting ? "Registering" : "Register"}
                </Button>
                <p className="text-base/10 ">
                  Already have an account? <a href="./login" className="text-sky-500">Login</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
   
  );
};

export default Registration;
