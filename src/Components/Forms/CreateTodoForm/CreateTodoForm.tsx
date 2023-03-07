import React, { FC, useState } from 'react'
import { ICategoryForm } from '../../../../pages/main'
import styles from '../../../../styles/CreateTodoForm.module.scss'

interface ICreateTodoForm {
  onClose: () => void
  handleChangeField: (key: keyof ICategoryForm, value: string) => void
  createTask: () => void
}

const CreateTodoForm: FC<ICreateTodoForm> = ({ onClose, handleChangeField, createTask }) => {
  return (
    <form
      className={styles.form}
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => {
        e.preventDefault()
        createTask()
      }}
    >
      <h3>Добавление таски</h3>
      <>
        <label htmlFor="form__input_category">Введите категорию</label>
        <input
          onChange={(e) => {
            handleChangeField('title', e.target.value)
          }}
          id="form__input_category"
          type="text"
        />
      </>

      <>
        <label htmlFor="form__input_category">Введите категорию</label>
        <input
          onChange={(e) => {
            handleChangeField('category', e.target.value)
          }}
          id="form__input_category"
          type="text"
        />
      </>

      <>
        <label htmlFor="form__input_category">Введите категорию</label>
        <input
          onChange={(e) => {
            handleChangeField('description', e.target.value)
          }}
          id="form__input_category"
          type="text"
        />
      </>

      <input type="submit" value="Подтвердить" />

      <input type="button" value="отмена" onClick={onClose} />
    </form>
  )
}
export default CreateTodoForm
