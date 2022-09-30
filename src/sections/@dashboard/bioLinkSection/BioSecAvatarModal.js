import * as React from 'react';
import { toast } from 'react-toastify';

import axios from 'axios'


import { useState } from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField, MenuItem } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { FaSignature } from 'react-icons/fa';
import { useTheme } from '@emotion/react';



// redux 
import { useDispatch, useSelector } from 'react-redux';
import { creatingHeadingBlock } from '../../../redux/slices/block/createBlockSlice'

const baseUrl = window.config.API_URL;


const PargraphModalMain = styled('Stack')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
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

export default function BioSecAvatarModal({ BioSecAvatarModalState, closeBlockSubModal, openBioLinkAddBlock }) {
  const dispatch = useDispatch()
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false);
  console.log('check_image', selectedFile)
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  // image size array 
  const sizeArray = [
    {
      label: ' 100 x 200px ',
      value: ' 200 x 300px ',
    },
    {
      label: ' 400 x 200px ',
      value: ' 200 x 300px ',
    },
    {
      label: ' 500 x 200px ',
      value: ' 200 x 400px ',
    },
  ];
  // image shape array 

  const avatarShape = [
    {
      label: 'Round',
      value: 'Round ',
    },
    {
      label: 'Rounded',
      value: 'Rounded ',
    },
    {
      label: 'Straight',
      value: ' Straight ',
    },

  ]

  const [state, setState] = React.useState({
    imageSizeArray: null,
    avatarShapeArray: null,

  });

  console.log('imageee', state)

  //   handle the Filed In avatar Modal
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    console.log('selectedFile', selectedFile)
    const linkid = localStorage.getItem('linkId')
    const token = JSON.parse(localStorage.getItem('user')).token
    const userID = JSON.parse(localStorage.getItem('user')).userid
    const url = `/api/user/mediaUpload/${userID}/${token}`;
    // const { coloum_name, coloum_type, size, radius, link_id } = req.body;
    const data = {
      coloum_name: 'image',
      size: state.imageSizeArray,
      coloum_type: 'avatar',
      radius: state.avatarShapeArray,
      picture: selectedFile,
      link_id: linkid
    }
    e.preventDefault()
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const status = response?.data?.status;
      const message = response?.data?.message;
      console.log('##status', message)


      if (status === 'success') {
        toast.success('Avatar Uploaded Successfully', {
          toastId: 123
        })
      }

    } catch (error) {
      console.log(error)

    }
    setState({
      imageSizeArray: '',
      avatarShapeArray: '',

    })
    closeBlockSubModal('BioSecAvatarModalState')

  }


  const theme = useTheme();
  return (
    <div>
      <Modal
        open={BioSecAvatarModalState}
        onClose={() => closeBlockSubModal('BioSecAvatarModalState')}
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
                onClick={() => { openBioLinkAddBlock('bioLinkAddBlockMainModalState'); closeBlockSubModal('BioSecAvatarModalState') }}
              />
              <Typography ml={1} variant="h6" fontWeight="thin">
                Add a Avatar
              </Typography>
            </Box>
            <CloseIcon onClick={() => closeBlockSubModal('BioSecAvatarModalState')} sx={{ cursor: 'pointer' }} />
          </ParagraphSubHeader>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
              <InsertPhotoIcon fontSize="small" sx={{ color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Image{' '}
              </Typography>
            </Box>
            <Box>
              <TextField type="file" onChange={changeHandler} fullWidth />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
              <FullscreenIcon fontSize="small" sx={{ color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Size{' '}
              </Typography>
            </Box>
            <Box>
              <TextField
                select
                name="imageSizeArray"
                value={state.imageSizeArray}
                fullWidth
                size="small"
                onChange={handleChange}
              >
                {sizeArray.map((size, index) => (
                  <MenuItem value={size.value}>{size.label}</MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
              <BorderAllIcon fontSize="small" sx={{ color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Border Radius{' '}
              </Typography>
            </Box>
            <Box>
              <TextField select name='avatarShapeArray' value={state.avatarShapeArray} fullWidth size="small" onChange={handleChange}>
                {avatarShape.map((size, index) => (
                  <MenuItem value={size.value}>{size.label}</MenuItem>
                ))}
              </TextField>
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
