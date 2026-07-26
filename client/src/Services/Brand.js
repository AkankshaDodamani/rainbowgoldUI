import axios from "axios";

export const getAllBrands = async () => {
  return await axios({
    method: "GET",
    url: `/api/brand/getAllBrands`,
  });
};
