export interface ITasks {
  taskText: string
  id: string
}

export interface ITaskProps {
  task: ITasks
  updateTask: (value: ITasks) => void
}
