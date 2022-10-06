import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {MainRoundMenu} from './components/MainRoundMenu'
import {useState} from "react";

const menuItems = [
  {
    id: 'Development',
    title: 'Development',
    icon:'Code'
  },
  {
    id: 'Testing',
    title: 'Testing',
    icon:'Check'
  },
  {
    id: 'Deployment',
    title: 'Deployment ',
    icon:'Deploy'
  },
  {
    id: 'Commit',
    title: 'Commit',
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
    </div>
  )
}

export default Home
