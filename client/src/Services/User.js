import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const login = async(username, password) => {
    return await axios({
        method: "POST",
        url: `${BASE_URL}/api/user/login`,
        data: {
            username: username,
            password: password
        }
    })
}