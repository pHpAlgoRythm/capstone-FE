// import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useRef } from 'react'
import Webcam from 'react-webcam'
const SubmitModal = ({setModal,setShowWebcam,showWebcam,webcamRef,imgSrc,setImgSrc}) => {
  // const [capturedPhoto,setCapturedPhoto] = useState(null)
  // get users info through localstorage
  // const request = localStorage.getItem();
  // no logic yet for discard button
  
  const handleClick = () => {
    const screenshot = webcamRef.current?.getScreenshot?.()
    if(screenshot){ 
      setImgSrc(screenshot)
      setShowWebcam(false)
    }
  }

  return (
         <div className='fixed inset-0 bg-black/90 z-2000 flex flex-col justify-center items-center w-screen h-screen '>

                <div className='bg-white min-w-xs min-h-fit flex flex-col rounded-lg justify-center gap-3 mx-auto p-2 shadow-md'>
                <div >
                <h2 className='font-semibold text-lg text-black'>Details</h2>
                </div>
                <hr className='border-t-2 border-gray-500 ' />
                <div className='flex flex-col gap-1 justify-center items-center'>

                  {imgSrc?  <img src={imgSrc} alt="" className='w-fit h-fit rounded-md' /> :
                  <p className='text-black border-2 border-gray-500 border-dashed p-20 ' >No captured photo</p> }
               
                <Button variant='contained' size='small' className='w-fit'  onClick={()=> setShowWebcam(true)}>Take photo</Button>
                </div>
                <div className='text-black'>
                <p >Requester :</p>
                <p>Type:</p>
                <p>Location:</p>
              
                </div>
                <hr className='border-t-2 border-gray-500' />
                <div className='flex justify-end items-center gap-1'>
                <Button variant='contained' color='error' className='w-auto !font-semibold 'onClick={(() => setModal(false))} >Discard</Button>
                <Button variant='contained'  className='w-auto !font-semibold !text-white  !bg-green-700'>Send</Button>
                </div>

                {showWebcam &&
               <>
               <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpg"
                className="h-screen w-screen fixed left-0 top-0 z-2 object-cover"
            /> 
                  <button className='h-20 w-20 rounded-full fixed z-3000 bottom-3 self-center border-5 border-white ' onClick={handleClick}></button>
               </>
            }
            
           </div>
    </div>

  )
}

export default SubmitModal