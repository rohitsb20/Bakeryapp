import { create } from "zustand";

const useAuthContext = create((set) => ({
  authUser: JSON.parse(localStorage.getItem("auth-User")) || null,
  setAuthUser: (user) => {
    localStorage.setItem("auth-User", JSON.stringify(user));
    set({ authUser: user });
  },
  logoutUser: () => {
    localStorage.removeItem("auth-User");
    set({ authUser: null });
  },
}));

export default useAuthContext;
