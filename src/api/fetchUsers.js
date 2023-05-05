import apiInstance from "./apiInstance";

const fetchUrl = "/users";

const fetchUsers = async () => {
    const response = await apiInstance.get(fetchUrl);

    return response.data.data;
}

export default fetchUsers;
