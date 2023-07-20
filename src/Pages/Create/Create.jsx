import React from 'react';
import { AccountCircle } from '@mui/icons-material'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
const Create = () => {
  return (
    <Box sx={{width:'366px',pt:'40px',display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <TextField
        id="input-with-icon-textfield"
        label="Transaction Title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
      sx={{mt:'20px'}}
        id="input-with-icon-textfield"
        label="Price"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MonetizationOnIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <ColorButton variant="contained" sx={{mt:'20px',width:'130px'}}>Submit <ChevronRightIcon/></ColorButton>
    </Box>
  )
}

export default Create