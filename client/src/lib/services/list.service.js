import { httpRequest } from '../httpRequest';

export const getLists = async () => await httpRequest('lists');

export const createList = async (list) => {};

export const updateList = async (list) => {
    const body = {
        title: list.title,
        position: list.position,
    };
    return await httpRequest(`lists/${list.id}`, body, 'PATCH');
};

export const deleteList = async (listId) => {};
