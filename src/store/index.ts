import { configureStore } from '@reduxjs/toolkit'
import attendanceReducer from './slices/attendanceSlice'

const store = configureStore({
    reducer: {
        attendance: attendanceReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch