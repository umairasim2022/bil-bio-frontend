import React, { useState, SyntheticEvent } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Link,
  Modal,
  Stack,
  styled,
  Switch,
  TextField,
  Tooltip,
  IconButton,
  Collapse,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { FaSignature } from 'react-icons/fa';

import { useTheme } from '@emotion/react';
import { alpha } from '@mui/material/styles';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  mr: 4,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#41aaa5' : '#41aaa5',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export default function LinkCards() {
  //   const [expanded, setExpanded] = (React.useState < string) | (false > false);

  //   const handleChange = (panel) => (event, isExpanded) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };
  const [expanded, setExpaned] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setExpaned(!expanded);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: '#eae9e9',
          marginTop: '25px',
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '1px solid grey',
        }}
      >
        <Box>
          <Stack direction="row" spacing={3}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              <Tooltip title="change status" placement="top" arrow>
                <Avatar sx={{ backgroundColor: ' deepPurple[500]' }}>KP</Avatar>
              </Tooltip>
            </Typography>
            <Typography
              sx={{ color: 'text.secondary', marginLeft: '0', lineHeight: '2.571429' }}
              onClick={handleChange}
            >
              <Tooltip title="Link" placement="top" arrow>
                <Link
                  component="button"
                  variant="body2"
                  title="Link"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  www/google.com
                </Link>
              </Tooltip>
            </Typography>
            <Tooltip title="change status" placement="top" arrow sx={{ marginLeft: '20px' }}>
              <IconButton>
                <AntSwitch
                  defaultChecked
                  sx={{ border: 'gray solid 1px', borderColor: '#41aaa5', borderRadius: '0.5rem' }}
                  inputProps={{ 'aria-label': 'ant design' }}
                />{' '}
              </IconButton>
            </Tooltip>

            {/* <Box sx={{ postion: 'relative' }}>
              <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Options
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                //   anchorEl={anchorEl}
                open={open}
                //   onClose={handleClose}
                sx={{ position: 'absolute', top: '0', right: '0' }}
              >
                <MenuItem
                  //   onClick={handleClose}
                  disableRipple
                >
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem
                  //   onClick={handleClose}
                  disableRipple
                >
                  <FileCopyIcon />
                  Duplicate
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                  //   onClick={handleClose}
                  disableRipple
                >
                  <ArchiveIcon />
                  Archive
                </MenuItem>
                <MenuItem
                  //   onClick={handleClose}
                  disableRipple
                >
                  <MoreHorizIcon />
                  More
                </MenuItem>
              </StyledMenu>
            </Box> */}
            {/* <FormControlLabel control={<Switch checked={expanded} onChange={handleChange} />} label="Show" /> */}
          </Stack>
        </Box>
      </div>

      <Collapse in={expanded}>
        <Box component="form">
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
            <LinkIcon fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
            <Typography variant="body2" ml={1}>
              Destination URL{' '}
            </Typography>
          </Box>
          <TextField label="link" fullWidth type="text" size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
            <FaSignature fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
            <Typography variant="body2" ml={1}>
              Name{' '}
            </Typography>
          </Box>
          <TextField label="link" fullWidth type="text" size="small" />
          <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Collapse>
    </>
  );
}
