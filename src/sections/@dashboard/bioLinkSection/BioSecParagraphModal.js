import * as React from 'react';
import { toast } from 'react-toastify';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField, TextareaAutosize } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';




import { FaSignature } from 'react-icons/fa';

import { useTheme } from '@emotion/react';

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { creatingHeadingBlock } from '../../../redux/slices/block/createBlockSlice'

const PargraphModalMain = styled('Stack')(({ theme }) => ({
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
const ParagraphSubHeader = styled('Stack')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function BioSecParagraphModal({ BioSecParagraphModalState, closeBlockSubModal, openBioLinkAddBlock }) {
  const dispatch = useDispatch()

  const [state, setState] = React.useState({
    coloum_value: '',
    columnName: 'paragraph'
  });
  console.log('stateeee', state)
  // handling heading Select
  const handleChange = e => {
    const { name, value } = e.target;
    console.log('headingname', name)
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // alert('link')
    await dispatch(creatingHeadingBlock(state))
    closeBlockSubModal('BioSecParagraphModalState')
  }

  const theme = useTheme();
  return (
    <div>
      <Modal
        open={BioSecParagraphModalState}
        onClose={() => closeBlockSubModal('BioSecParagraphModalState')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PargraphModalMain>
          <ParagraphSubHeader>
            <Box sx={{ display: 'flex', alignItems: 'start', p: '0 12px' }}>
              <KeyboardArrowLeftOutlinedIcon
                fontSize="small"
                sx={{
                  background: theme.palette.background.neutral,
                  color: 'primary.main',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={() => { openBioLinkAddBlock('bioLinkAddBlockMainModalState'); closeBlockSubModal('BioSecParagraphModalState') }}
              />
              <Typography ml={1} variant="h6" fontWeight="thin">
                Add a Paragraph
              </Typography>
            </Box>
            <CloseIcon onClick={() => closeBlockSubModal('BioSecParagraphModalState')} sx={{ cursor: 'pointer' }} />
          </ParagraphSubHeader>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
              <FormatTextdirectionRToLIcon fontSize="small" sx={{ color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Text{' '}
              </Typography>
            </Box>
            <Box>
              <TextareaAutosize rows={10} name='coloum_value' value={state.coloum_value}
                onChange={handleChange}

                fullWidth sx={{ width: '300px', display: 'block' }} />
            </Box>

            <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }} type='submit'>
              Submit
            </Button>
          </Box>
        </PargraphModalMain>
      </Modal>
    </div>
  );
}
