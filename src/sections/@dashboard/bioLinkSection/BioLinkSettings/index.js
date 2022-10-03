import React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import { Box, Grid, Button, Typography, Stack, styled, Container, Card, TextField } from '@mui/material';
import Customization from './Customization';
import Verified from './Verified';
import Branding from './Branding';
import Fonts from './Fonts';
import Protection from './Protection';
import UTMParameters from './UTMParameters';

export const SettingButton = styled(Button)({
  border: '1px solid #363636',
  color: '#fff',
  backgroundColor: '#363636',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#363636',
    color: '#fff',
  },
});

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.05rem 0.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#ababab',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  backgroundColor: '#363636',
  border: '1px solid #363636',
  borderRadius: '0.05rem',
};

// eslint-disable-next-line arrow-body-style
const BiolinkSettings = () => {
  return (
    <Container>
      <Grid
        xs={8}
        sm={12}
        // md={3.7}
        // component={Card}
        style={{ border: '1px solid  rgb(122, 122, 122 , .3)', borderRadius: '.25rem', backgroundColor: '#161a38' }}
      >
        <Stack direction="column" gap="15px" padding="1.5rem 1rem 1.5rem 1rem">
          <Typography> Short Url </Typography>
          <Box component={'div'} display={'flex'} flexDirection="row" padding={1} sx={{ marginRight: -1 }}>
            <Box component={'span'} sx={style}>
              https://66biolinks.com/demo/
            </Box>
            <OutlinedInput />
          </Box>
          <Customization />
          <Verified />
          <Branding />
          <Fonts />
          <Protection />
          <UTMParameters />
        </Stack>
      </Grid>
    </Container>
  );
};

export default BiolinkSettings;
