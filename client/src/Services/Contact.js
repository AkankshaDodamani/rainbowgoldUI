import apiClient from "./Api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllContacts = async () => {
    return await apiClient({
        method: "GET",
        url: `${BASE_URL}/api/contact/getAllContacts`,
    })
}

export const addContact = async (contactData) => {
    return await apiClient({
        method: "POST",
        url: `${BASE_URL}/api/contact/addContact`,
        data: contactData
    })
}