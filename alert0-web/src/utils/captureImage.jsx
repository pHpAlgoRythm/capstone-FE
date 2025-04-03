import { useRef,useState } from "react";


const capturedImage = () => {


    const webcamref = useRef(null);
    const [photoID,setPhotoID] = useState(null);
    const [capturedImage,SetCapturedImage] = useState(null);
    
}