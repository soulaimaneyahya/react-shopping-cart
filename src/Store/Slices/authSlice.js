import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        usersList: [],
        isLogin: localStorage.getItem("isLogin") === "true" || false
    },
    reducers: {
        addUser: (state, action) => {
            const { id, name, username, email, password, created_at } = action.payload;
            state.usersList.push({ id, name, username, email, password, created_at });
        },
        setLoginStatus: (state, action) => {
            state.isLogin = action.payload;
            localStorage.setItem("isLogin", action.payload);
        }
    }
});

export const {
    addUser,
    setLoginStatus
} = authSlice.actions;

export default authSlice;
