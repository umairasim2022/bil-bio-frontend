import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// mui
// components
import {
  Box,
  Grid,
  Button,
  Typography,
  Stack,
  styled,
  MenuItem,
  Divider,
  Switch,
  Link,
  Menu,
  Fade,
  IconButton,
  Tooltip,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// react components
import BioLinkAddBlockMainModal from './BioLinkAddBlockMainModal';
import BioLinkPreview from './BioLinkPreview';

function BioLinkMainSection() {
  const [tabIndex, setTabIndex] = useState(1);

  const [state, setState] = useState({
    bioLinkAddBlockMainModalState: false,
  });

  const openBioLinkAddBlock = (data) => {
    setState({
      [data]: true,
    });
  };
  const closeModal = (data) => {
    setState({
      [data]: false,
    });
  };

  const { bioLinkAddBlockMainModalState } = state;
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        sx={{
          '.MuiButton-contained': {
            boxShadow: 'none',
          },
        }}
      >
        <Grid item xs={12} md={6} display="flex" justifyContent="space-between" mt={4}>
          <Stack direction="row" columnGap={4}>
            <Button size="medium" onClick={() => setTabIndex(1)} variant={tabIndex === 1 ? 'contained' : 'text'}>
              Settings
            </Button>
            <Button size="medium" onClick={() => setTabIndex(2)} variant={tabIndex === 2 ? 'contained' : 'text'}>
              Block
            </Button>
          </Stack>
          <Stack direction="row">
            <Button
              variant="contained"
              size="medium"
              onClick={() => openBioLinkAddBlock('bioLinkAddBlockMainModalState')}
            >
              <AddCircleIcon /> &nbsp; Add Block
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5} mt={3}>
          {/* Mobile Design Section */}
          {/* <Grid> */}
          <BioLinkPreview />
          {/* </Grid> */}
        </Grid>
        {/* <Grid item md={6} display="flex">
          {tabIndex === 1 && <Typography>This is setting Section</Typography>}
          {tabIndex === 2 && <Typography>This is Block Section</Typography>}
        </Grid> */}
      </Grid>

      {/* modals  */}
      <BioLinkAddBlockMainModal
        bioLinkAddBlockMainModalState={bioLinkAddBlockMainModalState}
        closeModal={closeModal}
        openBioLinkAddBlock={openBioLinkAddBlock}
      />
    </>
  );
}

export default BioLinkMainSection;
