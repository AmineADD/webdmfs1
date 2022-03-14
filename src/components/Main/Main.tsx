import { FC } from 'react'
import { Status } from '../../types/Status';
import LoginOrRegister from '../Modal/Modal';
import styles from './Main.module.css'



const Main: FC<Status> = ({ isConnected }) => {
  return (
    <div className={styles.description}>
      <div className={styles.description}>
        <code className={styles.code}>TODO List : Efrei</code>
        <LoginOrRegister isConnected={isConnected} />
      </div>
    </div>)
}

export default Main;