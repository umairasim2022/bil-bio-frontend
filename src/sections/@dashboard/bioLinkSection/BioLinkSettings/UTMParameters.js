import React, { useState } from 'react';

import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Typography, TextField ,Alert} from '@mui/material';
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
const UTMParameters = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = (e) => {
    setOpen((prevState) => !prevState);
  
  };
  return (
    <>
      <SettingButton onClick={(e) => clickHandler(e)}>UTMParameters</SettingButton>
     
      {open && (
       
        <TransitionGroup>
          <Alert severity="error"> The campaign will be automatically set for each link in particular based on the name of the link.</Alert>
          <HtmlTooltip
            title={
              <>
                <Typography color="inherit">Your current plan does not allow to access this feature</Typography>
              </>
            }
          >
            <InputLabel disabled id="demo-select-small">
              Medium
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


          <TransitionGroup>
          <HtmlTooltip
            title={
              <>
                <Typography color="inherit">Your current plan does not allow to access this feature</Typography>
              </>
            }
          >
            <InputLabel disabled id="demo-select-small">
              Source
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
        </TransitionGroup>
        </TransitionGroup>
        
      )}
    </>
  );
};

export default UTMParameters;

