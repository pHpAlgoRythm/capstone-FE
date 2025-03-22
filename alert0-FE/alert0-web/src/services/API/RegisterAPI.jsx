import { useState } from "react";
import { io } from "socket.io-client";

const RegAuth = (setError) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const socket = io("http://localhost:3000/broadcast");

  const submitData = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "approval_id_photo" && key !== "approval_photo") {
        formData.append(key, data[key]);
      }
    });

    formData.append("approval_id_photo", data.approval_id_photo[0]);
    formData.append("approval_photo", data.approval_photo[0]);

    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: formData,
    });

    try {
      const result = await response.json();
      if (!response.ok) {
        if (result.data) {
          console.log("failed to submit Data");
          Object.keys(result.data).forEach((key) => {
            setError(key, {
              type: "server",
              message: result.data[key][0],
            });
          });
        }
      } else {
        alert("Registered successfuly");
        // socket.emit("newUsers", result.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return { submitData, isSubmitting };
};

export default RegAuth;
