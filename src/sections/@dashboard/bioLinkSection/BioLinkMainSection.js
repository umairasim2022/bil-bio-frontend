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
import Block from './block/Block';

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
  const PreviewIframe = styled('iframe')(() => ({
    width: '100%',
    height: '100%',
    border: '0',
    margin: '0',
    padding: '0',
  }));
  const openBlockSection = () => {
    console.log(tabIndex);
    setTabIndex(2);
    return <></>;
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
          width: '100%',
          marginTop: '24px',
        }}
      >
        <Grid sx={{ width: '50%' }}>
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" columnGap={4}>
              <Button size="medium" onClick={() => setTabIndex(1)} variant={tabIndex === 1 ? 'contained' : 'text'}>
                Settings
              </Button>
              <Button size="medium" onClick={() => openBlockSection()} variant={tabIndex === 2 ? 'contained' : 'text'}>
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
          <Box>
            {tabIndex === 2 && (
              <>
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
              </>
            )}
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            width: '50%',
          }}
          xs={12}
          md={5}
        >
          {/* Mobile Design Section */}
          {/* <Grid> */}
          {/* 
          <Box
            sx={{
              position: 'relative',
              margin: ' 0 auto',
              height: ' auto',
              width: ' 100%',
              display: 'inline-block',
              textAlign: 'left',
              borderRadius: '4rem',
              padding: '.7rem',
              background: 'linear-gradient(45deg, #444, #111)',
              boxShadow: ' 0 0px 30px rgba(0, 0, 0, 0.20)',
              border: '.3rem solid #444546',
            }}
          >
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '625px',
                borderRadius: '3rem',
                position: 'relative',
              }}
            >
              <PreviewIframe
                src="https://66biolinks.com/demo/l/link?link_id=29465&preview=c4ca4238a0b923820dcc509a6f75849b"
                title="hello"
              ></PreviewIframe>
            </Box>
          </Box> */}
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
