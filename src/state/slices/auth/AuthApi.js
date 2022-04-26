import axios from 'axios';

/**
 * Login User API
 * @param  {} payload
 */
export const loginApi = async (payload) => {
    try {
        const url = '';
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllUsersApi = async () => {
    try {
        const url = '/users';
        const response = await axios.get(url);
        return response;
    } catch (error) {
        throw error;
    }
};
