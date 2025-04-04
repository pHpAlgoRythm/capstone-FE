
import Webcam from "react-webcam";

const WebCamera = ({ webcamRef, SetCaptureImg, setCameraOn, setValue}) => {

    const handleCapture = () => {
        if (webcamRef.current) {
          const imgSrc = webcamRef.current.getScreenshot();
          SetCaptureImg(imgSrc);
          setValue("approval_photo", imgSrc);
          setCameraOn(false);
          // console.log(SetCaptureImg)
        }
      };
      
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpg"
          className="h-screen w-screen fixed left-0 top-0 z-2 object-cover"
        />
        <button onClick={handleCapture} className="fixed bg-white bottom-0 z-3">Capture</button>
      </>
    );
  };

  export default WebCamera
  