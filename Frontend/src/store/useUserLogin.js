import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserLogin = create(
  persist(
    (set) => ({
      isLogged: false, //null 
      
      user: {}, //inicial
      setIsLogged: (isLogged) => set(() => ({ isLogged: isLogged })),
      setUser: (user) =>
        set((state) => ({
          user: {
            
              ...state.user,
              
              name: user.name,
              rol: user.rol,
              surname: user.surname,
              phone: user.phone,
              email: user.email,
              address: user.address,
            
          },
        })),
    }),
      // setUser: (user) => set((state) => ({ user: {...user.data} })),
      // setIsAdmin: (isAdmin) => set(() => ({ isAdmin: isAdmin }))
    {
      name: "user-login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserLogin;