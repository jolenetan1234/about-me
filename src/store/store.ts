import { configureStore } from "@reduxjs/toolkit";

// reducers
import themeReducer from "@/features/theme/theme-slice";

// Used to create a store instance per request (this is specific to NextJS)
export const makeStore = () => {
    return configureStore({
        reducer: {
            theme: themeReducer,
        }
    });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];