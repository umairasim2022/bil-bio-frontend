import React, { useState } from 'react';
import Container from '@mui/material/Container';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Link,
    Stack,
    TextField,
    Typography,
    Button,
    Checkbox,
    Grid,
    Switch,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material';

import { ExpandMore, Tag } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';
import Anchor from '@mui/icons-material/Anchor';
import { borderRadius } from '@mui/system';
import ContrastIcon from '@mui/icons-material/Contrast';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import RadarIcon from '@mui/icons-material/Radar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import MouseIcon from '@mui/icons-material/Mouse';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
import KeyIcon from '@mui/icons-material/Key';
import ShareIcon from '@mui/icons-material/Share';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { DateTimePicker } from '@mui/x-date-pickers';

// import theme from '../../theme/palette';

const accordionTargeting = [
    {
        value: 'None',
        label: 'None',
    },
    {
        value: 'Country',
        label: 'Country',
    },
    {
        value: 'DeviceType',
        label: 'Device Type',
    },
    {
        value: 'BrowserLanguage',
        label: 'Browser Language',
    },
    {
        value: 'RotationA/BTesting',
        label: 'Rotation & A/B Testing',
    },
    {
        value: 'OperatingSystem',
        label: 'Operating System',
    },
];


const FileLinkMain = () => {

    const [chBox, setCheckBox] = useState(false);
    const [schedule, setSchedule] = useState(false);

    const [dropDownValues, setDropDownValues] = React.useState('None');
    const [type, setType] = React.useState({});
    const [deviceType, setDeviceType] = React.useState({});
    const [selectMenu, setSelectMenu] = useState(false);
    const [selectCountry, setSelectCountry] = useState({});
    const [state, setState] = useState({
        id: '',
        name: '',
        email: '',
    })
    console.log(type);

    const handleChange = (event) => {
        setDropDownValues(event.target.value);
        setType(event.target.value);
        setDeviceType(event.target.value)
    };

    const handleChangeMenu = (event) => {
        setSelectCountry(event.target.value);

    };

    const handleDeviceType = (event) => {
        setDeviceType(event.target.value)
    }


    const handleCheckBox = (event) => {
        console.log('scv', event.target);
        if (event.target) {
            setCheckBox(true);
        }
        if (!event.target) {
            setCheckBox(false);
        }
    };

    const openSelectMenu = () => {
        setSelectMenu(true)
    }

    const closeSelectMenu = () => {
        setSelectMenu(false)
    }

    const handleSchedule = () => [
        setSchedule(!schedule)
    ]

    return (
        <Container>
            <Box border="1px solid grey">
                {/* File  */}
                <Box p={2}>

                    <Stack direction='row' gap='6px' marginTop='20px'>
                        <VisibilitySharpIcon fontSize='small' />
                        <Typography>File</Typography>
                    </Stack>
                    <TextField placeholder="your-custom-alias" type='file' size="large" fullWidth fontSize=".8rem" sx={{ marginTop: '10px' }} />
                    <Typography variant='subtitle1' component='small' fontWeight='300' fontSize='.8rem' marginTop='5px'>
                        .jpg &nbsp; .jpeg &nbsp; .png &nbsp; .gif &nbsp; .pdf &nbsp; .zip Allowed.

                    </Typography>
                </Box>


                {/* SHORT URL  */}
                <Box p={2}>
                    <Stack direction="row" spacing={1.25}>
                        <Anchor fontSize="small" />
                        <Typography variant="h6" color="#dbdbdb">
                            Short URL
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <TextField
                            disabled
                            variant="outlined"
                            size="small"
                            defaultValue="https://66biolinks.com/demo/"
                            sx={{
                                dispaly: 'block',
                                width: '22%',
                                background: '#363636',
                                borderRadius: '.25rem',
                                fontSize: '0.9rem',
                                textDecoration: '#ababab',
                            }}
                            InputProps={{ readOnly: true }}
                        />
                        <TextField variant="outlined" size="small" sx={{ dispaly: 'block', width: '78%', fontSize: '0.9rem' }} />
                    </Stack>
                    <Typography sx={{ color: '#6e6e6e', fontSize: '80%' }}>Leave empty for a random generated one.</Typography>
                </Box>

                {/* Accordion-Pixels */}
                <Box m={2}>
                    <Accordion>
                        <AccordionSummary>
                            <Stack
                                direction="row"
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                            >
                                <ContrastIcon fontSize="small" sx={{ mr: 1 }} />
                                <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                                    Pixels
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack
                                direction="row"
                                border="2px"
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                            >
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <ContrastIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography>Pixels</Typography>
                                </Stack>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <AddIcon fontSize="small" />
                                    <Link>
                                        <Typography>Create Pixel</Typography>
                                    </Link>
                                </Stack>
                            </Stack>

                            <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <Grid container md={12}>
                                    <Grid item md={6}>
                                        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                            <Checkbox />
                                            <Typography onCLick={handleCheckBox}>Facebook Pixel</Typography>
                                            <Button onCLick={handleCheckBox}>Facebook</Button>
                                        </Stack>
                                    </Grid>

                                    <Grid item md={6}>
                                        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                            <Checkbox checked={setCheckBox} />
                                            <Typography onCLick={() => handleCheckBox()}>Google Analytics</Typography>
                                            <Button onCLick={() => handleCheckBox()}>Google Analytics</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                {/* Temporary URL */}
                <Box m={2}>
                    <Accordion>
                        <AccordionSummary>
                            <Stack
                                direction="row"
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                            >
                                <AccessTimeFilledOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                                <Typography variant="h6">Temporary URL</Typography>
                            </Stack>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Box>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <Switch fontSize="small" onClick={handleSchedule} />
                                    <Typography>Schedule</Typography>
                                </Stack>
                                <Typography fontSize="80%" color="grey" ml={7}>
                                    Configure the dates on which it will work.
                                </Typography>
                            </Box>
                            {schedule && (
                                <Box mt={2}>
                                    <Grid container>

                                        <Grid item md={6}>
                                            <Stack direction='row' sx={{ display: 'flex', alignItems: 'center', }}>
                                                <WatchLaterSharpIcon fontSize='small' />
                                                <Typography ml={1}> Start Date </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item md={6}  >
                                            <Stack direction='row' sx={{ display: 'flex', alignItems: 'center', }} >
                                                <WatchLaterSharpIcon fontSize='small' />
                                                <Typography ml={1}> End Date </Typography>
                                            </Stack>
                                        </Grid>

                                    </Grid>


                                    <Grid container mt={1}>
                                        <Grid item md={6} >
                                            <Stack width='96%'>
                                                <DateTimePicker
                                                    renderInput={(props) => <TextField {...props} />}
                                                />
                                            </Stack>
                                        </Grid>

                                        <Grid item md={6} >
                                            <Stack>
                                                <DateTimePicker
                                                    width='100%'
                                                    renderInput={(props) => <TextField {...props} />}
                                                />
                                            </Stack>
                                        </Grid>

                                    </Grid>
                                </Box>
                            )}


                            <Box mt={3}>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 1 }}>
                                    <MouseIcon fontSize="small" />
                                    <Typography ml={2}>Clicks Limit</Typography>
                                </Stack>
                                <TextField size="small" type="number" sx={{ width: '100%' }} />
                                <Typography fontSize="80%" color="grey" mt={0.5}>
                                    Only allow the link to work for a certain amount of clicks.
                                </Typography>
                            </Box>

                            <Box mt={3}>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 1 }}>
                                    <HourglassBottomTwoToneIcon fontSize="small" />
                                    <Typography ml={2}>Expiration URL</Typography>
                                </Stack>
                                <TextField size="small" sx={{ width: '100%' }} />
                                <Typography fontSize="80%" color="grey" mt={0.5}>
                                    Visitors will be redirected to this URL after the main link expires.
                                </Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                {/* Protection */}
                <Box m={2}>
                    <Accordion>
                        <AccordionSummary>
                            <Stack
                                direction="row"
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                            >
                                <AdminPanelSettingsOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                                <Typography variant="h6">Protection</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box mt={3}>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 1 }}>
                                    <KeyIcon fontSize="small" />
                                    <Typography ml={1.2}>Password</Typography>
                                </Stack>
                                <TextField size="small" type="password" sx={{ width: '100%' }} />
                                <Typography fontSize="80%" color="grey" mt={0.5}>
                                    Require users to enter a password before accessing the link.
                                </Typography>
                            </Box>

                            <Box mt={2}>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <Switch fontSize="small" />
                                    <Typography>Select Content Warning</Typography>
                                </Stack>
                                <Typography fontSize="80%" color="grey" ml={7}>
                                    Require users to confirm that they want to access your link and letting them know that the link might
                                    be sensitive.
                                </Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                {/* Advanced */}
                <Box m={2}>
                    <Accordion>
                        <AccordionSummary>
                            <Stack
                                direction="row"
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                            >
                                <ManageAccountsIcon fontSize="small" sx={{ mr: 1 }} />
                                <Typography variant="h6">Advanced</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack
                                direction="row"
                                border="2px"
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                            >
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <ShareIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography>Project</Typography>
                                </Stack>
                                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <AddIcon fontSize="small" />
                                    <Link>
                                        <Typography>Create Project</Typography>
                                    </Link>
                                </Stack>
                            </Stack>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                value={dropDownValues}
                                width="100%"
                                onChange={handleChange}
                                sx={{ width: '100%', mt: 1 }}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {accordionTargeting.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                {/* Update Button */}
                <Box m={2}>
                    <Button variant="contained" sx={{ display: 'block', width: '100%' }}>
                        Update
                    </Button>
                </Box>

            </Box>
        </Container>
    );
};


export default FileLinkMain; 