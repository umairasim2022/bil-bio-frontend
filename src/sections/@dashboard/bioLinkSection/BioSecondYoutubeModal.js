import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useTheme } from '@emotion/react';
import { mt } from 'date-fns/locale';


const SoftifyModalMain = styled('Stack')(({ theme }) => ({
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
const SoftifyModalSubHeader = styled('Stack')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export default function BioSecYouTubeModal({ BioSecYouTubeModalState, closeBlockSubModal, openBioLinkAddBlock }) {
    const [state, setState] = React.useState({
        youtubeUrl: ''
    })
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const theme = useTheme();
    return (
        <div>
            <Modal
                open={BioSecYouTubeModalState}
                onClose={() => closeBlockSubModal('BioSecYouTubeModalState')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <SoftifyModalMain >
                    <SoftifyModalSubHeader>
                        <Box sx={{ display: 'flex', alignItems: 'start' }}>
                            <KeyboardArrowLeftOutlinedIcon
                                fontSize="small"
                                sx={{ background: theme.palette.background.neutral, color: 'primary.main', borderRadius: '50%', cursor: 'pointer' }}
                                onClick={() => { openBioLinkAddBlock('bioLinkAddBlockMainModalState'); closeBlockSubModal('BioSecYouTubeModalState') }}
                            />
                            <Typography ml={1} variant="h6" fontWeight="thin">Add a YouTube video
                           </Typography>
                        </Box>
                        <CloseIcon onClick={() => closeBlockSubModal('BioSecYouTubeModalState')} sx={{ cursor: 'pointer' }} />
                    </SoftifyModalSubHeader>
                    <Typography variant="body1" sx={{ mt: 2, color: 'text.disabled' }}>
                                 Paste in your YouTube video URL and we will show it as a video on your profile.                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginY: '1rem' }}>
                        <LinkIcon fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
                        <Typography variant="body2" ml={1}>
                            YouTube Video URL</Typography>
                    </Box>
                    <Box component="form">
                        <TextField label="Url" fullWidth type="url" size="small" name='youtubeUrl' value={state.youtubeUrl} onChange={handleChange} />
                        <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
                            Submit
                        </Button>
                    </Box>
                </SoftifyModalMain>
            </Modal>
        </div>
    );
}
