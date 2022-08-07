import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer/todosSlice";

// Store
const store = configureStore({
  reducer: {
    todosReducer
  }
})

// Export
export default store