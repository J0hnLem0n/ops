import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Main} from './Main'

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}

export default Page
