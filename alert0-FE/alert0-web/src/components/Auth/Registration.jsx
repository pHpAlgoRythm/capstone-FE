import { useForm } from "react-hook-form";
import useRegister from "../services/API/useRegister";
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const { submitData, isSubmitting } = useRegister(setError);

  return (
    <>
      <div className="p-20 shadow-lg rounded-md bg-white">
        <form onSubmit={handleSubmit(submitData)}>
          <div className="md:grid grid-cols-2 gap-5 justify-items-center mx-auto max-w-lg p-6">
            <div className="sub-wrapper">
              <TextField
                {...register("name", {
                  required: "Fullname is required",
                })}
                variant="outlined"
                type="text"
                fullWidth
                label="Fullname"
                size="small"
              />
              {errors.name && (
                <p className="text-red-700">{errors.name.message}</p>
              )}
            </div>

            <div className="sub-wrapper">
              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email must be in the format: john@example.com",
                  },
                })}
                variant="outlined"
                type="email"
                fullWidth
                label="Email"
                size="small"
              />
              {errors.email && (
                <p className="text-red-700">{errors.email.message}</p>
              )}
            </div>
            <div className="sub-wrapper col-span-2 ">
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  {...register("gender", { required: "Gender is required" })}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="non-binary"
                    control={<Radio />}
                    label="Non-Binary"
                  />
                </RadioGroup>
              </FormControl>
              {errors.gender && (
                <p className="text-red-700">{errors.gender.message}</p>
              )}
            </div>

            <div className="sub-wrapper">
              <TextField
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Phone number must be exactly 11 digits",
                  },
                })}
                variant="outlined"
                type="tel"
                fullWidth
                label="Phone Number"
                size="small"
              />
              {errors.phone && (
                <p className="text-red-700">{errors.phone.message}</p>
              )}
            </div>

            <div className="sub-wrapper">
              <TextField
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Password must be at least 6 characters, include 1 uppercase letter & 1 number",
                  },
                })}
                variant="outlined"
                type="password"
                fullWidth
                label="Password"
                size="small"
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
            </div>

            <div className="sub-wrapper">
              <TextField
                {...register("c_password", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                variant="outlined"
                type="password"
                fullWidth
                label="Confirm Password"
                size="small"
              />
              {errors.c_password && (
                <p className="text-red-700">{errors.c_password.message}</p>
              )}
            </div>

            <div className="sub-wrapper">
              <TextField
                {...register("address", {
                  required: "Address is required",
                })}
                variant="outlined"
                multiline
                rows={1}
                fullWidth
                label="Address"
                size="small"
              />
              {errors.address && (
                <p className="text-red-700">{errors.address.message}</p>
              )}
            </div>
            {/* static values */}

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
            <label htmlFor="approval_id_photo">Approval id</label>
            <input type="file"  id="approval_id_photo"{...register('approval_id_photo')}   />
            <label htmlFor="approval_photo">Approval Photo</label>
            <input type="file" id="approval_photo" {...register('approval_photo')} />
            <div className="col-span-2 flex justify-center flex-col rounder-sm gap-2">
              <Button type="submit"
               variant="contained"
                size="small"
                disabled= {isSubmitting}>
                {isSubmitting ? "Registering" : "Register"}
              </Button>
              <p className="">
                Already have an account?{" "}
                <a href="./login" className="text-sky-500">
                  Login
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
