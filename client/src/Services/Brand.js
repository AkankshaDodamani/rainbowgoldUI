import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllBrands = async () => {
  return await axios({
    method: "GET",
    url: `${BASE_URL}/api/brand/getAllBrands`,
  });
};

export const getBrandBySlug = async (brandSlug) => {
  return await axios({
    method: "GET",
    url: `${BASE_URL}/api/brand/getBrandBySlug`,
    params: {
      slug: brandSlug
    }
  })
}