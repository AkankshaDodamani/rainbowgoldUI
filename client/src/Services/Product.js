import axios from "axios";

export const getAllProductsByBrand = async (brandSlug) => {
  return await axios({
    method: "GET",
    url: `/api/product/getAllProductsByBrand`,
    params: {
      slug: brandSlug,
    },
  });
};
