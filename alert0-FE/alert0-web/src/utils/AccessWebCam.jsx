import { useState, useEffect } from "react";
import Webcam from "react-webcam";

const WebCamera = ({ webcamRef, SetCaptureImg, setCameraOn, setValue }) => {
  const [showButton, setShowButton] = useState(false);

  const handleCapture = () => {
    if (webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      SetCaptureImg(imgSrc);
      setValue("approval_photo", imgSrc);
      setCameraOn(false);
    }
  };

  
  useEffect(() => {
    const webcamElement = webcamRef.current;
    if (webcamElement) {
      const onUserMedia = () => setShowButton(true);
      webcamElement.video?.addEventListener("playing", onUserMedia);
      return () => {
        webcamElement.video?.removeEventListener("playing", onUserMedia);
      };
    }
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpg"
        className="h-screen w-screen fixed left-0 top-0 z-2 object-cover"
      />

      {showButton && (
        <button
          onClick={handleCapture}
          className="fixed bg-transparent bottom-0 z-20 mb-8 w-[70px] h-[70px] rounded-full cursor-pointer border-2 border-blue-500 p-4"
        ></button>
      )}
    </>
  );
};

export default WebCamera;
