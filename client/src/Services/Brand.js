import apiClient from "./Api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllBrands = async () => {
  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/brand/getAllBrands`,
  });
};

export const getBrandBySlug = async (brandSlug) => {
  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/brand/getBrandBySlug`,
    params: {
      slug: brandSlug
    }
  });
};

export const createBrand = async (brandData) => {
  console.log("brandData: ", brandData);
  return await apiClient({
    method: "POST",
    url: `${BASE_URL}/api/brand/createBrand`,
    data: brandData,
  });
};

// Used when clicking the Trash Icon (Soft Delete)
export const deleteBrand = async (brandSlug) => {
  return await apiClient({
    method: "PUT", 
    url: `${BASE_URL}/api/brand/deleteBrand`,
    params: {
      slug: brandSlug,
    },
  });
};

export const updateBrand = async (brandSlug, updateData) => {
  return await apiClient({
    method: "PUT",
    url: `${BASE_URL}/api/brand/updateBrand`,
    params: {
      slug: brandSlug,
    },
    data: updateData, 
  });
};