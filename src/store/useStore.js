import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => {
    if (state.count > 0) {
      return { count: state.count - 1 };
    }
    return state;
  }),
}));

export default useStore;
