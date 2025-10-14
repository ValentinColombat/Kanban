import { httpRequest } from '../httpRequest';

// ! attention, l'ordre des arguments a été modifié dans httpRequest, on le répercute ici dans les appels
export const registerUser = async (user) => {
    return await httpRequest('auth/register', user, 'POST');
};

export const loginUser = async (credentials) => {
    const { token } = await httpRequest('auth/login', credentials, 'POST');

    return { token };
};

export const getUser = async () => {
    return await httpRequest('auth/me');
};
