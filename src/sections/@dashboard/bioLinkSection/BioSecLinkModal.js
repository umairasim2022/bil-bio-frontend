import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { FaSignature } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { creatingHeadingBlock } from '../../../redux/slices/block/createBlockSlice'

const TikTokModalMain = styled('Stack')(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  background: theme.palette.background.paper,
  boxShadow: 24,
  borderRadius: '5px',
  padding: '3rem',
}));
const TiktokSubHeader = styled('Stack')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function BioSecLinkModal({ linkModalState, closeBlockSubModal, openBioLinkAddBlock }) {
  const theme = useTheme();
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    coloum_type: '',
    coloum_value: '',
    columnName: 'link'
  });
  console.log('stateeee', state)
  // handling heading Select
  const handleChange = e => {
    const { name, value } = e.target;
    console.log('headingname', name)
    setState(prevState => ({
      ...prevState,
      [name]: value,
    
    }));

  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('link')
    await dispatch(creatingHeadingBlock(state))
  }
  return (
    <div>
      <Modal
        open={linkModalState}
        onClose={() => closeBlockSubModal('linkModalState')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TikTokModalMain>
          <TiktokSubHeader>
            <Box sx={{ display: 'flex', alignItems: 'start', p: '0 12px' }}>
              <KeyboardArrowLeftOutlinedIcon
                fontSize="small"
                sx={{
                  background: theme.palette.background.neutral,
                  color: 'primary.main',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={() => { openBioLinkAddBlock('bioLinkAddBlockMainModalState'); closeBlockSubModal(linkModalState) }}
              />
              <Typography ml={1} variant="h6" fontWeight="thin">
                Add a Link Button
              </Typography>
            </Box>
            <CloseIcon onClick={() => closeBlockSubModal('linkModalState')} sx={{ cursor: 'pointer' }} />
          </TiktokSubHeader>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
              <LinkIcon fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Destination URL{' '}
              </Typography>
            </Box>
            <TextField label="link" fullWidth type="text" size="small" onChange={handleChange}
              value={state.coloum_type} name='coloum_type' />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
              <FaSignature fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Name{' '}
              </Typography>
            </Box>
            <TextField label="link" fullWidth type="text" size="small" onChange={handleChange}
              value={state.coloum_value} name='coloum_value' />
            <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }} type='submit'>
              Submit
            </Button>
          </Box>
        </TikTokModalMain>
      </Modal>
    </div>
  );
}
