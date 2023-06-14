import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "product",
    initialState: {
        productsList: [
            {
                id: 282,
                name: "MacBook",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor.",
                imgURL: "https://storage.googleapis.com/foto_autosusados/automotoras/sinwm/751/01011072484-1-1-3.jpg",
                price: 25,
                created_at: "2023-06-09T15:45:00",
            },
            {
                id: 33903,
                name: "Lenovo Yoga",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor.",
                imgURL: "https://dummyimage.com/500x500/f0f0f0/8a8a8a",
                price: 25,
                created_at: "2023-06-09T15:45:00",
            },
            {
                id: 355,
                name: "Dell lattitude",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor.",
                imgURL: "https://dummyimage.com/500x500/f0f0f0/8a8a8a",
                price: 25,
                created_at: "2023-06-09T15:45:00",
            },
            {
                id: 595925,
                name: "HP Pavillion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor.",
                imgURL: "https://dummyimage.com/500x500/f0f0f0/8a8a8a",
                price: 25,
                created_at: "2023-06-09T15:45:00",
            },
            {
                id: 991,
                name: "Acer Aspire",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor.",
                imgURL: "https://dummyimage.com/500x500/f0f0f0/8a8a8a",
                price: 25,
                created_at: "2023-06-09T15:45:00",
            },
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            const { id, created_at } = action.payload;
            state.productsList.push({ id, created_at });
        },
        deleteProduct: (state, action) => {
            const id = action.payload;
            state.productsList = state.productsList.filter(item => item.id !== id);
        },
    },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice;
