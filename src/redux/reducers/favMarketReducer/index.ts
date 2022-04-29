import {createSlice} from "@reduxjs/toolkit";

const init:{favMarkets : string[]} = {
    favMarkets : []
}

const favMarketReducer = createSlice({
    name: 'favMarketReducer',
    initialState: init,
    reducers: {
        add: (state, action) => {
            state.favMarkets.push(action.payload.favId)
        },
        remove: (state, action) => {
            state.favMarkets = state.favMarkets.filter(item => item !== action.payload.favId)
        },
        reset: (state, action) => {
            state.favMarkets = []
        }

    }
})

export const {add,remove} = favMarketReducer.actions
export default favMarketReducer.reducer