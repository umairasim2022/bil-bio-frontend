import React, { useState } from 'react';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import { TransitionGroup } from 'react-transition-group';

import { SettingButton } from './index';

// eslint-disable-next-line arrow-body-style
const Verified = () => {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState(3);

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const updateSelectVal = (e) => {
    setFont(e.target.value);
  };

  return (
    <>
      <SettingButton onClick={clickHandler}>
        <FontDownloadIcon /> &nbsp; Fonts
      </SettingButton>
      {open && (
        <TransitionGroup>
          <InputLabel disabled id="demo-select-small">
            Font
          </InputLabel>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              sx={{ color: 'white' }}
              value={font}
              displayEmpty
              onChange={updateSelectVal}
            >
              <MenuItem value={1}>Arial</MenuItem>
              <MenuItem value={2}>Verdana</MenuItem>
              <MenuItem value={3}>Helvetic</MenuItem>
              <MenuItem value={4}>Times New Romans</MenuItem>
              <MenuItem value={5}>Inter</MenuItem>
              <MenuItem value={5}>Lato</MenuItem>
              <MenuItem value={6}>Open Sans</MenuItem>
              <MenuItem value={7}>Montserrat</MenuItem>
              <MenuItem value={8}>Karla</MenuItem>
              <MenuItem value={9}>Inconsolata</MenuItem>
            </Select>
          </FormControl>
          <InputLabel sx={{ marginTop: '5px', marginBottom: '5px ' }} disabled id="outlined-number">
            Font Size
          </InputLabel>
          <TextField
            fullWidth
            id="outlined-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </TransitionGroup>
      )}
    </>
  );
};

export default Verified;
