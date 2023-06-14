import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        usersList: [],
        isLogin: false
    },
    reducers: {
        addUser(state, action) {
            const user = JSON.parse(action.payload);
            state.usersList.push({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                created_at: user.created_at
            });

            return state
        },
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        },
        isLogin(state, action) {
            state.isLogin = action.payload
        }
    },
});

export const authActions = authSlice.actions;

export default authSlice;
