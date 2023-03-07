import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.scss'
import Input from '../src/Components/Input/Input'
import { useTypeSelector } from '../hooks/useTypeSelector'
import Link from 'next/link'

const Home: NextPage = () => {
  const { tasks } = useTypeSelector((state) => state)
  return (
    <div className={styles.preview}>
      <h1>Добрый день, на данный момент у вас есть {tasks.length} тасок</h1>
      <Link href={'/main'}>Подробнее</Link>
    </div>
  )
}

export default Home
