import React from 'react';
import { CssBaseline } from '@mui/material';
import AppBarComponent from '../components/AppBarComponent';
import DrawerComponent from '../components/DrawerComponent';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Box } from '@mui/material';
const drawerWidth=240;
const Root = () => {
  const [pageMode,setPageMode] = useState(localStorage.getItem('currentMode') === null?'light':localStorage.getItem('currentMode')==='light' ?'light':'dark');
  const darkTheme = createTheme({
    palette: {
      mode: pageMode,
    },
  });
  return (
    <>
       <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <AppBarComponent drawerWidth={drawerWidth}/>

      <DrawerComponent drawerWidth={drawerWidth} setPageMode={setPageMode}/>
     <Box sx={{ml:`${drawerWidth}px`,display:'flex',justifyContent:'center'}}>
        <Outlet/>
        </Box>
        </ThemeProvider>
    </>
  )
}

export default Root