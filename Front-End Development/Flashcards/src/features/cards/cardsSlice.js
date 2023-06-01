import { createSlice } from '@reduxjs/toolkit';

const cards = createSlice({
    name: 'cards',
    initialState: { cards: {} },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
        }
    }
});

export const selectCards = (state) => state.cards.cards;
export const addCard = cards.actions.addCard;
export default cards.reducer;