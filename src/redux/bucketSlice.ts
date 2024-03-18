import {createSlice} from '@reduxjs/toolkit';

export interface IInit {
    name: null | string
    price: null | number
    amount: null | number

}

const initState: IInit[] = [];

export const bucketSlice = createSlice({
    name: 'bucket',
    initialState: initState,
    reducers: {
        setItem(state, action) {
            state.push(action.payload);
        },
        removeItem(state) {

        },
    }
});

export const {setItem, removeItem} = bucketSlice.actions;
export default bucketSlice.reducer;