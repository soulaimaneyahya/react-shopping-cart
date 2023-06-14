import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "product",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        totalPrice: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const {id, name, imgURL, price} = action.payload;

            const existingItem = state.itemsList.find(
                item => item.id === id
            )

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += price;
            } else {
                state.itemsList.unshift({
                    id: id,
                    name: name,
                    imgURL: imgURL,
                    quantity: 1,
                    price: price,
                    totalPrice: price,
                    added_to_cart_at: Date.now()
                });
                state.totalQuantity++;
            }

            state.totalPrice += price;
        },
        updateItem(state, action) {
            const {id} = action.payload;

            const existingItem = state.itemsList.find(
                item => item.id === id
            )

            console.log(existingItem)
        },
        removeFromCart(state, action) {
            const id = action.payload;

            const existingItem = state.itemsList.find(
                item => item.id === id
            )

            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
            }

            existingItem.totalPrice -= existingItem.price;
            state.totalPrice -= existingItem.price;
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
        emptyCart(state) {
            state.itemsList = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
