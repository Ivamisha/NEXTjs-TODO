import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITasks } from '../src/Components/Task/interface'

interface ITaskInitialState {
  tasks: ITasks[]
}

const initialState: ITaskInitialState = {
  tasks: [
    {
      id: '1',
      taskText: 'AHAHAHAHAHAH',
    },
    {
      id: '2',
      taskText: 'SDASDASDASDASD',
    },
  ],
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<string>) {
      state.tasks.push({ id: new Date().toISOString(), taskText: action.payload })
    },
    updateTask(state, action: PayloadAction<ITasks>) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      )
    },
    getAllTask(state) {
      state.tasks
    },
  },
})
export const actions = todoSlice.actions
export const { createTask } = todoSlice.actions
export default todoSlice.reducer
