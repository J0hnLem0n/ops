import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainRoundMenu from './components/MainRoundMenu'
import {useState} from "react";

const menuItems = [
  {
    id: 'Development',
    title: 'Кто мы',
    icon:'Code'
  },
  {
    id: 'Testing',
    title: 'Экспертиза',
    icon:'Check'
  },
  {
    id: 'Deployment',
    title: 'Завершенные проекты ',
    icon:'Deploy'
  },
  {
    id: 'Commit',
    title: 'Контакты',
    icon:'Commit'
  }
];

const Home: NextPage = () => {
  const [page, setPage] = useState()
  return (
    <div className={styles.container}>
      <MainRoundMenu
          size = '440'
          iconSize = '130'
          menuItems = { menuItems }
          setPage = {setPage}
      />
      <div className="rm-page">
        <p className="rm-page__header">Commit</p>
        <p className="rm-page__text">The COMMIT Foundation is changing the way Veterans and the private sector think about military transition. We assist America's Veterans in finding purpose as they transition from military careers to civilian life. COMMIT's programs help Veterans successfully transition into the civilian workforce.</p>
      </div>
    </div>
  )
}

export default Home
