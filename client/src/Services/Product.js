// eslint-disable-next-line no-unused-vars
import axios from "axios";
import apiClient from "./Api.js";

const BASE_URL = import.meta.env.VITE_API_URL;


export const getAllProductsByBrand = async (brandSlug) => {

  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/product/getAllProductsByBrand`,
    params: {
      slug: brandSlug,
    },
  });
};

export const deleteProduct = async (productSlug) => {

  return await apiClient({
    method: "PUT",
    url: `${BASE_URL}/api/product/deleteProduct`, 
    params: {
      slug: productSlug,
    },
  });
};

export const getAllProducts = async () => {
  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/product/getAllProducts`,
  });
}

export const createProduct = async (productData) => {
  return await apiClient({
    method: "POST",
    url: `${BASE_URL}/api/product/createProduct`,
    data: productData,
  });
}

export const updateProduct = async (productSlug, updateData) => {
  return await apiClient({
    method: "PUT",
    url: `${BASE_URL}/api/product/updateProduct`,
    params: {
      slug: productSlug,
    },
    data: updateData,
  });
}

export const getNewLaunches = async () => {
  return await apiClient({
    method: "GET",
    url: `${BASE_URL}/api/product/getNewLaunchProducts`,
  })
}