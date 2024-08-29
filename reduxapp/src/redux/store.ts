import {configureStore} from "@reduxjs/toolkit";


//import counterReducer from "../slices/counter";
import counterSlice from './slices/counter';


export const store = configureStore({
    reducer: {
        counter:counterSlice,
    },
});


export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;








