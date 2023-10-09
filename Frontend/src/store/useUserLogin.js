import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserLogin = create(
  persist(
    (set) => ({
      isLogged: false, //null 
      rol: "admin", //valor inicial
      user: {},
      setIsLogged: (isLogged) => set(() => ({ isLogged: isLogged })),
      setUser: (user) => set(() => ({ user: user })),
      setRol: (rol) => set(() => ({ rol: rol })),
    }),
    {
      name: "user-login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserLogin;