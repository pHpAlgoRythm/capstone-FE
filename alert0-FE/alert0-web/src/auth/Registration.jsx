import { useForm} from "react-hook-form";
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
  Stepper, Step, StepLabel,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import WebCamera from "../utils/AccessWebCam";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const { submitData, isSubmitting } = RegAuth(setError);
  const steps = ['User Info', 'ID Photo', 'Face Photo', 'Confirmation'];
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);
  const webcamRef = useRef(null)
  const [cameraOn, setCameraOn] = useState(false)
  const [capturedImg, SetCaptureImg] = useState(null)
  const [activeStep, setActiveStep] = useState(0);

  const handleCameraOn = () => {
    setCameraOn(true)
    
  }

  const handleNext = async () => {
    let isValid = false
    try {
      if (activeStep === 0) {
        isValid = await trigger(['name', 'gender', 'phone', 'password', 'c_password', 'address'])
      } else if (activeStep === 1) {
        const fileInput = watch('approval_id_photo')
        if(!fileInput){
          setError('approval_id_photo', {
            type: 'manual',
            message: 'ID Photo is required',
          });
          isValid = false
        }else {
          isValid = await trigger('approval_id_photo')
        }
      }else if(activeStep === 2){

        if(!capturedImg){
          setError('approval_photo',{
            type: 'manual',
            message: 'Face Photo is required'
          });
          isValid = false
        }else {
          isValid = await trigger('approval_photo')
        }
      }
      if (isValid) {
        setActiveStep((prevStep => prevStep + 1))
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleBack = () => setActiveStep((prev) => prev - 1);



  const FileInputRef = useRef(null)
  const [Image,setImage] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if(file){
      const ImageURL = URL.createObjectURL(file)
      setImage(ImageURL)
      setValue("approval_id_photo",file)

    }
  }


  const triggerFileInput = () => {
    FileInputRef.current.click()
  }

  return (
    <div className="md:bg-gray-300 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10  overflow-hidden">
      <div
        className="bg-white h-full max-h-2xl w-full max-w-4xl md:shadow-lg rounded-2xl"
        data-aos="fade-down"
      >
        <form onSubmit={handleSubmit(submitData)}>

          <div className="flex flex-col justify-center items-center mb-0.5">
            <img
              src="/images/KCERA.png"
              alt="KCERA Logo"
              className="min-h-15 max-h-20 w-auto"
            />
          </div>

          <h1 className="text-base/10  font-bold text-gray-900  uppercase  text-center  mb-2">
            Register an Account
          </h1>

          <Stepper activeStep={activeStep} className="mb-3">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className="mx-auto p-3 h-auto w-auto ">

            {activeStep === 0&&

              <div className="flex flex-col mx-auto px-auto h-auto w-auto  gap-2">

                <div>
                  <TextField
                    {...register("name", { required: "Fullname is required" })}
                    variant="outlined"
                    type="text"
                    label="Fullname"
                    size="small"
                    fullWidth
                  />
                  {errors.name && (
                    <p className="text-red-700 text-sm">{errors.name.message}</p>
                  )}
                </div>

                  
                <div className="md:self-center">
                  <FormControl>
                    <FormLabel
                    >Gender</FormLabel>
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
                    <p className="text-red-700 text-sm">{errors.gender.message}</p>
                  )}
                </div>
                <div>
                  <TextField
                    {...register("email", {
                      required: "Email is required",
                      validate: isValidEmail,
                    })}
                    variant="outlined"
                    type="email"
                    fullWidth
                    label="email"
                    size="small"
                  />
                  {errors.email && (
                    <p className="text-red-700 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <TextField
                    {...register("phone", {
                      required: "Phone number is required",
                      validate: isValidPhone,
                    })}
                    variant="outlined"
                    type="tel"
                    fullWidth
                    label="Phone Number"
                    size="small"
                  />
                  {errors.phone && (
                    <p className="text-red-700 text-sm">{errors.phone.message}</p>
                  )}
                </div>


                <div>
                  <TextField
                    {...register("password", {
                      required: "Password is required",
                      validate: isValidPassword,
                    })}
                    variant="outlined"
                    type="password"
                    fullWidth
                    label="Password"
                    size="small"
                  />
                  {errors.password && (
                    <p className="text-red-700 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>


                <div>
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
                    <p className="text-red-700 text-sm">
                      {errors.c_password.message}
                    </p>
                  )}
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
                  {errors.address && (
                    <p className="text-red-700 text-sm">{errors.address.message}</p>
                  )}

                </div>
                <hr className="col-span-1" />
                <Button
                  className="sm:col-span-2 my-2"
                  type="button"
                  variant="contained"
                  size="small"
                  onClick={handleNext}
                  fullWidth
                  sx={{

                    width: "auto",
                  }}
                >
                  Next
                </Button>

              </div>}

            {activeStep === 1 &&
              <>
                <div className="sm:col-span-2  w-full h-full ">

                  <div className="sm:col-span-2 flex flex-col gap-2 p-2 justify-center items-center">

                    <FormLabel htmlFor="approval_photo">ID Photo</FormLabel>

                    <img src={Image} className="h-50 md:h-70 w-full md:w-lg border-3 border-dashed border-gray-300 " />

                    <Button type="button" onClick={triggerFileInput} variant="contained" color="primary" sx={{
                      width: 'auto'
                    }} >Upload ID</Button>

                     <input type="file" onChange={handleImageUpload} accept="image/png" ref={FileInputRef} className="hidden"/>


                        <input type="hidden" id="approval_id_photo" value={Image || ''} name="approval_id_photo" />
                        
                    {errors.approval_id_photo && (
                      <p className="text-red-700 text-sm">{errors.approval_id_photo.message}</p>
                    )}

                  </div>

                  <hr />
                  <div className="flex justify-between  items-center w-full col-span-2 my-2">
                    <Button

                      type="button"
                      variant="contained"
                      size="small"
                      onClick={handleBack}
                      startIcon={<NavigateBefore />}
                      fullWidth
                      sx={{
                        width: "auto",
                        backgroundColor: '#374151'

                      }} >

                      back
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      size="small"
                      onClick={handleNext}
                      color="primary"
                      endIcon={<NavigateNext />}
                      fullWidth
                      sx={{
                        width: "auto",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
            
<<<<<<< Updated upstream
            </>
            }
                {activeStep === 2 &&
=======
              {/* <input
                type="file"
                id="approval_photo"
                {...register("approval_photo")}
                className="border-3 border-dashed border-gray-300 p-2 h-40 md:h-45 lg:h-50  w-full max-w-sm "
              />  */}
            <FormLabel htmlFor="approval_photo">Live Photo</FormLabel>
            <img src={capturedImg} className="border h-30 md:h-50 md:w-md lg:h-70 lg:w-lg" />
            {cameraOn && <WebCamera webcamRef={webcamRef} SetCaptureImg={SetCaptureImg} setCameraOn={setCameraOn}/>}
            <Button type="button" onClick={handleCameraOn} variant="contained" color="success" >Capture</Button>
            </div>
           
            </div>
>>>>>>> Stashed changes

                  <div className="w-full h-full ">

                    <div className="sm:col-span-2 flex flex-col gap-2 p-2 justify-center items-center">

                      <FormLabel htmlFor="approval_photo">Face Photo</FormLabel>

                      <input type="hidden" id="approval_photo" accept="images/*"
                        {...register("approval_photo")}
                        className="border-3 border-dashed border-gray-300 p-2 h-40 md:h-45 lg:h-100  w-full max-w-sm "
                      />

                      <img src={capturedImg} className="h-50 md:h-70 w-full md:w-lg border-3 border-dashed border-gray-300 " />

                      {cameraOn && <WebCamera webcamRef={webcamRef} SetCaptureImg={SetCaptureImg} setCameraOn={setCameraOn} />}

                      <Button type="button" onClick={handleCameraOn} variant="contained" color="success"  sx={{
                        width: 'auto'
                      }}>Capture</Button>

          {errors.approval_photo && (
                      <p className="text-red-700 text-sm ">{errors.approval_photo.message}</p>
                    )}
                      <input type="hidden" id="approval_photo"
                        {...register("approval_photo")}
                        className="border-3 border-dashed border-gray-300 p-2 h-40 md:h-45 lg:h-100  w-full max-w-sm "/>
                        </div>
                       
                        <div className="flex justify-between  items-center w-full col-span-2 my-2">
                        
                    <Button

                      type="button"
                      variant="contained"
                      size="small"
                      onClick={handleBack}
                      startIcon={<NavigateBefore />}
                      fullWidth
                      sx={{
                        width: "auto",
                        backgroundColor: '#374151'
                      }} >

                      back
                    </Button>
{/* 
                    <Button
                      type="button"
                      variant="contained"
                      size="small"
                      onClick={handleNext}
                      color="primary"
                      endIcon={<NavigateNext />}
                      fullWidth
                      sx={{
                        width: "auto",


                      }}

                    >
                      Next
                    </Button> */}
                    <Button type="submit">{isSubmitting? 'registering': 'register' }</Button>
                  </div>
                        </div>
                }
               
                {activeStep === 4 &&

                  <div className="sm:col-span-2 flex flex-col items-center space-y-2 ">

                    <Button type="submit">{isSubmitting ? 'Registering' : 'register'}</Button>

                    <p className="text-base/10 ">
                      Already have an account?{" "}
                      <a href="./login" className="text-sky-500">
                        Login
                      </a>
                    </p>
                  </div>
                }
                
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
              </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;