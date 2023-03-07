import { FC, useEffect, useId, useState } from 'react'
import { useActions } from '../../../hooks/useAction'
import { ITasks } from '../Task/interface'

const Input: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { createTask } = useActions()
  let temp = false
  const newIdForTask = useId()

  const handleAddNewTask = (): void => {
    if (inputValue.length < 3) {
      setErrorMessage('Ну ты и ******')
      if (!temp) {
        temp = true
        setTimeout(() => {
          setErrorMessage('')
          temp = false
        }, 2000)
      }
    } else {
      createTask(inputValue)
    }
  }

  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      {errorMessage ? <p>{errorMessage}</p> : null}
      <button onClick={handleAddNewTask}>Add new Task</button>
    </>
  )
}
export default Input
