import {toast} from 'react-hot-toast'
import {useState} from 'react'
import useAuthContext from '../zustand/useAuthContext'

export default function useSignup() {

    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()


    const signupData = async ({
      fullname,
      email,
      password,
      confirmPassword,
    }) => {
      const success = handleErrors({
        fullname,
        email,
        password,
        confirmPassword,
      });
      if (!success) {
        return;
      }

      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullname, email, password, confirmPassword }),
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
    return {loading, signupData}
 
}



const handleErrors = ({fullname, email, password, confirmPassword}) => {

    if (!fullname || !email || !password || !confirmPassword) {
        toast.error("All fields are required")
        return false
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match")
        return false
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters")
        return false}


    return true
}
