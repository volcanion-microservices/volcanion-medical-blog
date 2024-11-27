import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/counterSlice'
import usersReducer from '@/redux/usersSlice'

// Thêm reducers của bạn tại đây
const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    // exampleReducer: exampleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
