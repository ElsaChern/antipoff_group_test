import apiInstance from "./apiInstance"

const loginUrl = "/login"

const login = async (email, password) => {
    const params = {
        email,
        password,
    }

    const response = await apiInstance.post(loginUrl, params);

    return response.data;
}

export default login;