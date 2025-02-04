import { useState } from "react";
import useAuthContext from "../zustand/useAuthContext";
import toast from "react-hot-toast";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const loginData = async ({ email, password }) => {
    setLoading(true);

    const success = handleError({ email, password });
    if (!success) {
      
      return;
    }









    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("auth-User", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginData };
}


const handleError = ({ email, password }) => {

if (!email || !password) {
    toast.error("Please fill all the fields");
    return false;
    }

    if (password.length < 6) {
    toast.error("Password should be atleast 6 characters long");
    return false;
    }


    return true;
}
