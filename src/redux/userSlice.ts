import {createSlice} from '@reduxjs/toolkit';

interface IInit {
    email: null | string;
    token: null | string;
    id: null | string;
}

const initState : IInit = {
    email: null,
    token: null,
    id: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            localStorage.removeItem('user')
        },
    }
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
