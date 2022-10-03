import React, { useState } from 'react';

import { Box, Grid, Button, Typography, Stack, styled, Container, Card, TextField, InputLabel } from '@mui/material';
import { Label } from '@mui/icons-material';

import { AntSwitch } from '../block/bioLinkBlockCards/LinkCard';
import { SettingButton } from './index';

const Branding = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <SettingButton onClick={clickHandler}>Branding</SettingButton>
      {open && (
        <Grid container direction="column">
          <Stack direction="row" spacing={1}>
            <AntSwitch
              defaultChecked
              sx={{ border: 'gray solid 1px', borderColor: '#41aaa5', borderRadius: '0.5rem' }}
              inputProps={{ 'aria-label': 'ant design' }}
            />
            <Typography sx={{ lineHeight: 1 }}> Display Branding</Typography>
          </Stack>
          <Stack direction="column" sx={{ margin: '15px 0px' }}>
            <InputLabel html-for="branding-name">Branding Name</InputLabel>
            <TextField id="branding-name" variant="outlined" sx={{ margin: '10px 0' }} />
            <Typography sx={{ fontSize: 12 }}>Leave empty to have the default site branding.</Typography>

            <InputLabel html-for="branding-url">Branding URL</InputLabel>
            <TextField id="branding-url" variant="outlined" sx={{ margin: '10px 0' }} />

            {/* <InputLabel>Text Color</InputLabel> */}
          </Stack>
        </Grid>
      )}
    </>
  );
};

export default Branding;
