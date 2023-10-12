import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserLogin = create(
  persist(
    (set) => ({
      isLogged: false, //null 
      
      user: {}, //inicial
      setIsLogged: (isLogged) => set(() => ({ isLogged: isLogged })),
      setUser: (user) =>
        set(() => ({ user: user
        })),
      }),
      /////////
      // user: {            
      //     ...state.user,
          
      //     name: user.name,
      //     rol: user.rol,
      //     surname: user.surname,
      //     phone: user.phone,
      //     email: user.email,
      //     address: user.address,            
      // },
  ///////////////
      
    {
      name: "user-login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserLogin;