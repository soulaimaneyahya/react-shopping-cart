import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList: [],
    totalQuantity: 0,
    totalPrice: 0,
    showCart: false,
};

const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, imgURL, price } = action.payload;

            const existingItem = state.itemsList.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += price;
            } else {
                state.itemsList.unshift({
                    id,
                    name,
                    imgURL,
                    quantity: 1,
                    price,
                    totalPrice: price,
                    added_to_cart_at: Date.now(),
                });
                state.totalQuantity++;
            }

            state.totalPrice += price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;

            const existingItemIndex = state.itemsList.findIndex(
                (item) => item.id === id
            );

            if (existingItemIndex !== -1) {
                const existingItem = state.itemsList[existingItemIndex];
                if (existingItem.quantity === 1) {
                    state.itemsList.splice(existingItemIndex, 1);
                    state.totalQuantity--;
                } else {
                    existingItem.quantity--;
                }

                existingItem.totalPrice -= existingItem.price;
                state.totalPrice -= existingItem.price;
            }
        },
        setShowCart: (state) => {
            state.showCart = !state.showCart;
        },
        emptyCart: (state) => {
            state.itemsList = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    setShowCart,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Custom function to save cart state to localStorage
const saveCartStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cartState", serializedState);
    } catch (error) {
        console.log("Error saving cart state to localStorage:", error);
    }
};

// Custom function to load cart state from localStorage
const loadCartStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("cartState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log("Error loading cart state from localStorage:", error);
        return undefined;
    }
};

// Define a wrapper function that combines the original reducer with the localStorage functionality
export const cartReducer = (state = loadCartStateFromLocalStorage() || initialState, action) => {
    const newState = cartSlice.reducer(state, action);
    saveCartStateToLocalStorage(newState);
    return newState;
};
