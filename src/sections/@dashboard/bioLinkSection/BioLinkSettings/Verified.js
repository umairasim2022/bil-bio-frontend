import React, { useState } from 'react';

import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
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
const Verified = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <SettingButton onClick={clickHandler}>Verified</SettingButton>
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
              Location
            </InputLabel>
          </HtmlTooltip>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={12}
            label="Location"
            disabled
            sx={{ width: '100%' }}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Top</MenuItem>
            <MenuItem value={20}>Bottom</MenuItem>
            <MenuItem value={30}>Right</MenuItem>
          </Select>
        </TransitionGroup>
      )}
    </>
  );
};

export default Verified;
