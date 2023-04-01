import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  fetchData: async (url) => {
    console.log("pppp");
    const response = await fetch(url);

    set({ data: [await response.json()] });
  },
}));

export default useStore;
