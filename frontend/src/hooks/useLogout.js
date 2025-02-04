import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuthContext from "../zustand/useAuthContext.js"



export default function useLogout() {
    const {logoutUser} = useAuthContext();
  
    const [loading, setLoading] = useState(false);
    const logout = async () => {
        setLoading(true);
        try {
        const response = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
          
        });
        const data = await response.json();

if(data.error){
    toast.error(data.error)
}

   localStorage.removeItem("chat-user");
   logoutUser();
   toast.success("Logout successful");


        
        } catch (error) {
         toast.error(error.message)
        } finally {
        setLoading(false);
        }

        

    };
    
    return { logout, loading };
}
