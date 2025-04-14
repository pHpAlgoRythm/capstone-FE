import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const RegAuth = (setError) => {
const navigate = useNavigate()


  const [isSubmitting, setIsSubmitting] = useState(false);
  const socket = io("http://127.0.0.1:8080");
  function base64ToBlob(base64, mime = '') {
    const byteString = atob(base64.split( ',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mime });
  }

  const submitData = async (data) => {
  setIsSubmitting(true);
  const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "approval_id_photo" && key !== "approval_photo") {
        formData.append(key, data[key]);
      }
    });
    console.log(data)
    if (typeof data.approval_id_photo === 'string' && data.approval_id_photo.startsWith('data:image')) {
      const blob1 = base64ToBlob(data.approval_id_photo, 'image/jpeg');
      formData.append("approval_id_photo", blob1, 'id_photo.jpg');
    } else if (data.approval_id_photo instanceof File) {
      formData.append("approval_id_photo", data.approval_id_photo);
    }
  
    if (typeof data.approval_photo === 'string' && data.approval_photo.startsWith('data:image')) {
      const blob2 = base64ToBlob(data.approval_photo, 'image/jpeg');
      formData.append("approval_photo", blob2, 'selfie_photo.jpg');
    } else if (data.approval_photo instanceof File) {
      formData.append("approval_photo", data.approval_photo);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {

        if (result.data) {
          Object.keys(result.data).forEach((key) => {
            setError(key, {
              type: "server",
              message: result.data[key][0],
            });
          });
        }
      } else {
        navigate('/resident/pending')
        socket.emit('register')
      };

    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitData, isSubmitting };
};

export default RegAuth;
