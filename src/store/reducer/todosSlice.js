import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

// get todos async
export const getTodos = createAsyncThunk('todos/todosFetched', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

  return response.data;
})

// add todo async
export const addTodo = createAsyncThunk('todos/todosAdded', async title => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false
  }

  await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)

  // action.payload
  return newTodo
})

// delete todo async
export const deleteTodo = createAsyncThunk('todos/todoDeleted', async todoId => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

  return todoId;
})

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: []
  },
  reducers: {
    // addTodo: {
    //   reducer(state, action) {
    //     state.allTodos.unshift(action.payload)
    //   },
    //   prepare(title) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         completed: false
    //       }
    //     }
    //   }
    // },
    markComplete(state, action) {
      const todoId = action.payload

      state.allTodos = state.allTodos.map(todo => {
        if (todo.id === todoId)
          todo.completed = !todo.completed

        return todo
      })
    },
    // deleteTodo(state, action) {
    //   const todoId = action.payload

    //   state.allTodos = state.allTodos.filter(todo => {
    //     return todo.id !== todoId
    //   })
    // },
    // todosFetched(state, action) {
    //   state.allTodos = action.payload
    // }
  },

  extraReducers: {
    // Get all todos
    [getTodos.pending]: (state, action) => {
      console.log('Fetching todos from backend...')
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log('Get todos done.')
      state.allTodos = action.payload
    },
    [getTodos.rejected]: (state, action) => {
      console.log('Failed to get todos!')
    },

    // Add todo
    [addTodo.pending]: (state, action) => {
      console.log('Adding the todo...')
    },
    [addTodo.fulfilled]: (state, action) => {
      console.log('Add the todo done.')
      state.allTodos.unshift(action.payload)
    },
    [addTodo.rejected]: (state, action) => {
      console.log('Failed to add the todo')
    },

    // Delete todo
    [deleteTodo.pending]: (state, action) => {
      console.log('Deleting the todo from backend...')
    },
    [deleteTodo.fulfilled]: (state, action) => {
      console.log('Delete the todo done.')
      state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload)
    }
  }
})

// Async action creator, action and reducer dispatch
// export const getTodos = () => {
//   const getTodosAsync = async dispatch => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

//       dispatch(todosFetched(response.data))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return getTodosAsync
// }


// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todosSelector = state => state.todosReducer.allTodos

// Action export
export const {
  // addTodo,
  markComplete,
  // deleteTodo,
  // todosFetched
} = todosSlice.actions

// Export reducer
export default todosReducer