import axios from "axios";

export const brandService = {
  getAllBrands: async () => {
    try {
      const response = await axios.get('/api/brand/getAllBrands');
      return response.data;
    } catch (error) {
      console.error("Error fetching all brands:", error);
      throw new Error(error.response?.data?.message, "Failed to fetch brands");
    }
  },
};
