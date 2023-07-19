
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const AppBarComponent = ({drawerWidth}) => {
  return (
    <>
    <>
        <AppBar position="static" sx={{width:`calc(100% - ${drawerWidth}px)`,ml:`${drawerWidth}px`}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expense
          </Typography>
          <Button color="inherit">Mohamed Elsayed</Button>
          <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      </Stack>
        </Toolbar>
      </AppBar>
    </>
    </>
  )
}

export default AppBarComponent


