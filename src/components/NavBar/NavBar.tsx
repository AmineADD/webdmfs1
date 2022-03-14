import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Styles from './NavBar.module.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Status from './Status/Status';
import { Status as propsStatus } from '../../types/Status';

//
const NavBar: FC<propsStatus> = ({ isConnected }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={Styles.AppBar} >
                <Toolbar>

                    <Stack direction="row">
                        <Chip avatar={<Status status={isConnected} />} label={isConnected ? 'connected' : 'not connected'} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar;