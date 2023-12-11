import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface props {
    x: number
    y: number
    scale: number
}

const initialState = {
    value: {
        x: 50,
        y: 300
    }
} as { value: props }

const astronautSlice = createSlice({
    name: 'astronaut',
    initialState,
    reducers: {
        setAstronaut(state, action: PayloadAction<props>) {
            state.value = action.payload
        }
    }
})

export const { setAstronaut } = astronautSlice.actions

export default astronautSlice.reducer