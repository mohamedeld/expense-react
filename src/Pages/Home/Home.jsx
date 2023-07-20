import { Close } from '@mui/icons-material'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Box>
        <Paper sx={{position:'relative',width:'366px',display:'flex',justifyContent:'space-between',mt:'22px',pt:'27px',pb:'7px'}}>
          <Typography sx={{ml:'16px',fontSize:'1.3rem'}} variant='h6'>GYM</Typography>
          <Typography sx={{mr:'22px',fontWeight:'500',fontSize:'1.4rem',opacity:'0.8'}} variant='h6'>$100</Typography>
          <IconButton sx={{position:'absolute',top:'0',right:'0'}}>
            <Close sx={{fontSize:'20px'}}/>
          </IconButton>
        </Paper>
      </Box>
      </>
    )
}

export default Home