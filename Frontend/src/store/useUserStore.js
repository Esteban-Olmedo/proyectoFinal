import { create } from "zustand";
const useUserStore = create((set) => ({
  user: null,
  saveUserName: (userName) => set(() => ({ user: userName })),
}));
export default useUserStore;