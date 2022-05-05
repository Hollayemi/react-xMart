import martApi from '../../api/baseApi';

// /**
//  * Login User API
//  * @param  {} payload
//  */
const payload = {
    Headers: {
        token:
            'Holla ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wSUQiOiI2MjcxMjM2MjRjNzYzNmQ3ODYzYzdlNzUiLCJpYXQiOjE2NTE2NjE5ODYsImV4cCI6MTY1MTg3Nzk4Nn0.0lYt-ppUKWEilPM4Yeu9VcpfzMNpDYsmzizEmeIpK4E',
    },
};

const loginApi = async () => {
    try {
        const url =
            '/view/627123624c7636d7863c7e75/brands/62725cb9cf8718ee5daba127';
        const response = await martApi.post(url, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

loginApi();

// export const getAllUsersApi = async () => {
//     try {
//         const url = '/users';
//         const response = await axios.get(url);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// };
