import axios from "axios";

export const getAllBrands = async () => {
  return await axios({
    method: "GET",
    url: `/api/brand/getAllBrands`,
  });
};

export const getBrandBySlug = async (brandSlug) => {
  return await axios({
    method: "GET",
    url: `/api/brand/getBrandBySlug`,
    params: {
      slug: brandSlug
    }
  })
}