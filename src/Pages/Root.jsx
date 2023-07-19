import React from 'react';

import AppBarComponent from '../components/AppBarComponent';
import DrawerComponent from '../components/DrawerComponent';
const drawerWidth=240;
const Root = () => {
  return (
    <>
       
      <AppBarComponent drawerWidth={drawerWidth}/>

      <DrawerComponent drawerWidth={drawerWidth}/>
    
    </>
  )
}

export default Root