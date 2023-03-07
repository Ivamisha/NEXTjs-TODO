import { FC } from 'react'
import style from '../../../../styles/Title.module.scss'

interface ITaskInfoTitileProps {
  title: string
}

const TaskInfoTitile: FC<ITaskInfoTitileProps> = ({ title }) => {
  return (
    <div className={style.title}>
      <h4>{title}</h4>
    </div>
  )
}
