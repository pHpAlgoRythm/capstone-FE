import { useState } from "react";
import { io } from "socket.io-client";

const useRegister = (setError) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const socket = io('http://localhost:3000/broadcast')
  const submitData = async (data) => {
    setIsSubmitting(true);
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
        socket.emit('newUsers',result.data)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false)
    }
  };
  return { submitData, isSubmitting }

}

export default useRegister;