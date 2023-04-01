import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  endpointUrl: "",
  fetchData: async (url) => {
    const response = await fetch(url);

    set({ data: await response.json(), endpointUrl: url });
  },
}));

export default useStore;
