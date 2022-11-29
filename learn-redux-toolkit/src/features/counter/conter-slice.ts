// DUCKS

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 1,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            //its okay todo this because immer makes it immutable under the hood
            // under the hood
            state.value++
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
        // decrement

        // reset
    }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;