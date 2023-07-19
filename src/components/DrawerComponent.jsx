import React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
const DrawerComponent = ({drawerWidth}) => {
  return (
    <>
        <Drawer
        sx={{
          width: `${drawerWidth}px`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}px`,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
       
        
      </Drawer>
    </>
  )
}

export default DrawerComponent