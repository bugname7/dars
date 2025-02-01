import { create } from "zustand";

const useLoginStore = create((set) => ({
  user: null,
  login: (username) => set({ user: { username } }),
  logout: () => set({ user: null }),
}));

export default useLoginStore;
