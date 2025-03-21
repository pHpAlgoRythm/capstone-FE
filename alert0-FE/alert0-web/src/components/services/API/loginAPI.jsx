import { useNavigate } from "react-router-dom";
import { useState } from "react";
const useLogin = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitData = async (data) => {
    setIsSubmitting(true);
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userID", result.data.id);
        localStorage.setItem("fullName", result.data.message);

        if (result.data.role == "resident") {
          navigate("/resident/dashboard");
        } else if (result.data.role == "admin") {
          navigate("/adminPage/dashboard");
        } else alert("Inavlid Account Log in");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return { submitData, isSubmitting };
};

export default useLogin;
