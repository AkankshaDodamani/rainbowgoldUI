import apiClient from "./Api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllBrands = async () => {
  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/Brand/getAllBrands`,
  });
};

export const getBrandBySlug = async (brandSlug) => {
  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/Brand/getBrandBySlug`,
    params: {
      slug: brandSlug
    }
  });
};

export const createBrand = async (brandData) => {
  return await apiClient({
    method: "POST",
    url: `${BASE_URL}/api/Brand/createBrand`,
    data: brandData,
  });
};

// Used when clicking the Trash Icon (Soft Delete)
export const deleteBrand = async (brandSlug) => {
  return await apiClient({
    method: "PUT", 
    url: `${BASE_URL}/api/Brand/deleteBrand`,
    params: {
      slug: brandSlug,
    },
  });
};

// Used when clicking the Active/Inactive Toggle switch
export const updateBrand = async (brandSlug, updateData) => {
  return await apiClient({
    method: "PUT",
    url: `${BASE_URL}/api/Brand/updateBrand`,
    params: {
      slug: brandSlug,
    },
    data: updateData, 
  });
};