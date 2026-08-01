import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;


export const getAllProductsByBrand = async (brandSlug) => {
  return await axios({
    method: "GET",
    url: `${BASE_URL}/api/product/getAllProductsByBrand`,
    params: {
      slug: brandSlug,
    },
  });
};
