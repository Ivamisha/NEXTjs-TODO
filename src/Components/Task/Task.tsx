import { FC, useState } from 'react'
import { ITaskProps } from './interface'
import styles from '../../../styles/Task.module.scss'

const Task: FC<ITaskProps> = ({ task, updateTask }) => {
  const [activeEdit, setActiveEdit] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(task.taskText)
  return (
    <div className={styles.task}>
      {!activeEdit ? (
        <>
          <p>нужно сделать:</p>

          <p>{task.taskText}</p>

          <button onClick={() => setActiveEdit(true)}>Редактировать</button>
        </>
      ) : (
        <>
          <p>редактировать таску</p>

          <input onChange={(e) => setInputValue(e.target.value)} type="text" value={inputValue} />

          <button onClick={() => setActiveEdit(false)}>отмена</button>

          <button
            onClick={() => {
              updateTask({ id: task.id, taskText: inputValue })
              setActiveEdit(false)
            }}
          >
            подтвердить
          </button>
        </>
      )}
    </div>
  )
}
export default Task
