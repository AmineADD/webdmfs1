import { FC } from 'react'
import { TodoList } from '../../types/Todo';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import styles from './TodoList.module.css'

const TodoList: FC<{
    todolist: TodoList[];
}> = ({ todolist }) => {

    return (
        <div className={styles.container}>
            {todolist.map((todo, _) =>
                <List
                    key={_}
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '10%' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <Typography variant='h5'>{todo.name}</Typography>
                        </ListSubheader>
                    }
                >
                    {todo.list.map((t, _key_) => <ListItemButton key={_key_} ><ListItemText primary={t.title} /></ListItemButton>)}
                </List>)
            }
        </div >
    )
}

export default TodoList;
