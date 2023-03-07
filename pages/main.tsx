import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'
import Input from '../src/Components/Input/Input'
import Task from '../src/Components/Task/Task'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useAction'
import { ITasks } from '../src/Components/Task/interface'
import { useEffect, useState } from 'react'
import Portal from '../HOC/modals/CreateTodoModal'
import CreateTodoForm from '../src/Components/Forms/CreateTodoForm/CreateTodoForm'

export interface ICategoryForm {
  category: string
  title: string
  description: string
}

const Main: NextPage = () => {
  const { tasks } = useTypeSelector((state) => state)
  const { updateTask, getAllTask } = useActions()
  const [openModal, setOpenModal] = useState<boolean>(false)

  const updateTodoTask = (value: ITasks) => {
    updateTask(value)
  }

  const [formValue, setFormValue] = useState<ICategoryForm>({
    title: '',
    category: '',
    description: '',
  })

  const handleChange = <T = keyof ICategoryForm, U = T[keyof T]>(key: T, value: U): void => {
    setFormValue({ ...formValue, [key as string]: value })
  }

  const createNewTask = () => {
    console.log(formValue)
    setFormValue({ title: '', category: '', description: '' })
    setOpenModal(false)
  }

  useEffect(() => {
    getAllTask()
  }, [tasks])

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p className={styles.title__text}>Введите вашу таску </p>

        <Input />
        <input type="button" value="pick me" onClick={() => setOpenModal(true)} />
      </div>

      <div className={styles.main__tasks}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} updateTask={updateTodoTask} />
        ))}
      </div>

      {openModal && (
        <Portal
          onClick={() => {
            setOpenModal(false)
          }}
        >
          <CreateTodoForm
            onClose={() => setOpenModal(false)}
            handleChangeField={handleChange}
            createTask={createNewTask}
          />
        </Portal>
      )}
    </div>
  )
}

export default Main
