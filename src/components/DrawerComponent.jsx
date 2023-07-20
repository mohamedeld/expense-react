import React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {Box} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DraftsIcon from '@mui/icons-material/Drafts';
import {v4 as uuidv4} from "uuid"; 
import {listItemsData} from "../data/listItemsData";
import { List } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
const DrawerComponent = ({drawerWidth,setPageMode}) => {
  const theme = useTheme()
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
      
          <IconButton sx={{display:'flex',justifyContent:'center',py:'1.2rem',cursor:'pointer'}} onClick={()=> {
            localStorage.setItem("currentMode",theme.palette.mode === 'light'?'light':'dark');
            setPageMode(theme.palette.mode === 'light' ? 'dark':'light')}}> 
          
        <NightlightIcon />
          </IconButton>
     
        <Divider />
        <List>
            {
                listItemsData.map(item=>(
                    <ListItemButton key={uuidv4()}>
                        <ListItemIcon>
                        {item.icon}
                        </ListItemIcon>
                        <Link to={item.link} style={{textDecoration:'none'}}>
                            <ListItemText primary={item.name} style={{textDecoration:'none'}}/>
                        </Link>
                    </ListItemButton>

                ))
            }
        </List>
        
      </Drawer>
    </>
  )
}

export default DrawerComponent