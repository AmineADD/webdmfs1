import { FC } from 'react'
import { user } from '../../types/User';
import LoginOrRegister from '../Modal/Modal';
import TodoList from '../TodoList/TodoList';
import User from '../User/User';
import styles from './Main.module.css'

const Main: FC<{
  user: user | undefined;
}> = ({ user }) => (
  <div className={styles.description}>
    <div className={styles.description}>
      <code className={styles.code}>TODO List : Efrei</code>
      <LoginOrRegister isConnected={user?.name !== undefined} />
    </div>
    <div className={styles.grid}>
      {user?.name && user?.todoList && (<>
        <User user={user} />
        <TodoList todolist={user?.todoList} />
      </>
      )}

    </div>
  </div>);

export default Main;