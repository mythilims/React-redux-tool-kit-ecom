import { createSlice } from '@reduxjs/toolkit';
let cardDetails = JSON.parse(localStorage.getItem('card')) || [];
const AddCardSlicer = createSlice({
    name: 'addToCard',
    initialState: { cardDetails: cardDetails },
    reducers: {
        addCard: (state, action) => {
            state.cardDetails.push(action.payload);
            localStorage.setItem('card', JSON.stringify(state.cardDetails));
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cardDetails = state.cardDetails.filter((x) => x.id !== id);
            localStorage.setItem('card', JSON.stringify(state.cardDetails));

        },
        clearCart: (state) => {
            state.cardDetails = []
        }
    }
})

export const { addCard, removeFromCart, clearCart } = AddCardSlicer.actions;
export default AddCardSlicer.reducer;