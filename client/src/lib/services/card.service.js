import { httpRequest } from '../httpRequest';

export const getCards = async (listId) => await httpRequest(`cards?list_id=${listId}`);

export const createCard = async (card) => {};

export const updateCard = async (card) => {
    const body = {
        content: card.content,
        position: card.position,
        color: card.color,
        list_id: card.list_id,
    };

    return await httpRequest(`cards/${card.id}`, body, 'PATCH');
};

export const deleteCard = async (cardId) => {};
