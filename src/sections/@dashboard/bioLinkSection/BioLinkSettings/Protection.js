import React, { useState } from 'react';

import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { TextField, Typography, Alert,  IconButton , Switch } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { TransitionGroup } from 'react-transition-group';

import { SettingButton } from './index';

const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  })
);

// eslint-disable-next-line arrow-body-style
const Protection = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    mr: 4,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#ffffff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#41aaa5' : '#41aaa5',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  

  return (
    <>
      <SettingButton onClick={clickHandler}>Protection</SettingButton>
      {open && (
        <TransitionGroup>
          <HtmlTooltip
            title={
              <>
                <Typography color="inherit">Your current plan does not allow to access this feature</Typography>
              </>
            }
          >
            <InputLabel disabled id="demo-select-small">
               Password 
            </InputLabel>
          </HtmlTooltip>
          <TextField
            labelId="demo-select-small"
            id="demo-select-small"
            // value={12}
            // label="Location"
            // disabled
            sx={{ width: '100%' }}
            // onChange={handleChange}
       
          />
          <Alert >Require users to enter a password before accessing the link.</Alert>


          <Tooltip>
            <IconButton>
              <AntSwitch
                defaultChecked
                sx={{ border: 'gray solid 1px', borderColor: '#41aaa5', borderRadius: '0.5rem' }}
                inputProps={{ 'aria-label': 'ant design' }}
              />{' '}

            </IconButton>
           
          </Tooltip>
       <h5 >Require users to confirm that they want to access your link and letting them know that the link might be sensitive.</h5>
      
        </TransitionGroup>
        
      )}
    </>
  );
};

export default Protection;

