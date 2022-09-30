import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// components
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
  styled,
  Avatar,
  alpha,
  MenuItem,
  Divider,
  Switch,
  Link,
  Menu,
  Fade,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleIcon from '@mui/icons-material/Circle';
import Iconify from '../../../components/Iconify';

const RootStyle = styled('div')(({ theme }) => ({
  // spacing from top bottom left right to the title container
  padding: theme.spacing(5, 10),
  width: '100%',
  //   background: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(15, 5),
  },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
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

const BioLinkTitle = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        marginTop: '1.8rem',
        '.css-17ceore-MuiSvgIcon-root': {
          fontSize: '.8rem',
        },
      }}
    >
      <Grid item xs={12} display="flex" justifyContent="flex-start" alignItems="center" gap="10px" >
        <Link to="/dashboard" underline="hover" component={RouterLink}>
          Link
        </Link>
        <ArrowForwardIosIcon />
        <Typography variant="body2">Biolink settings</Typography>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="start" mt={3}>
        <Typography variant="h4">randomtext</Typography>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          columnGap={1}
          sx={{
            '.css-17ceore-MuiSvgIcon-root': {
              fontSize: '.8em',
              color: theme.palette.mode === 'dark' ? '#ffff' : 'gray',
            },
            '.css-34jmg4-MuiSvgIcon-root': {
              color: theme.palette.mode === 'dark' ? '#ffff' : 'gray',
            },
          }}
        >
          <Tooltip title="change status" placement="top" arrow>
            <IconButton>
              <AntSwitch
                defaultChecked
                sx={{ border: 'gray solid 1px', borderColor: '#41aaa5', borderRadius: '0.5rem' }}
                inputProps={{ 'aria-label': 'ant design' }}
              />{' '}
            </IconButton>
          </Tooltip>
          <Tooltip title="copy to clipboard" placement="top" arrow>
            <IconButton>
              <FileCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="statistics" placement="top" arrow>
            <IconButton>
              <InsertChartOutlinedIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon sx={{ fontSize: '1em', color: theme.palette.mode === 'dark' ? 'white' : 'gray' }} />
          </IconButton>
          <Menu
            sx={{
              '.css-1cad22s-MuiButtonBase-root-MuiMenuItem-root': {
                columnGap: '12px',
                paddingLeft: '20px',
                paddingRight: '25px',
              },
              '.css-17ceore-MuiSvgIcon-root': {
                fontSize: '1.2em',
              },
              '.css-1ogrtd-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
                borderRadius: '0',
                border: '2px solid grey',
              },
            }}
            display="flex"
            justifyContent="center"
            padding="4px 20px"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              {' '}
              <EditIcon /> Edit
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <InsertChartOutlinedIcon /> Statistics
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FileCopyIcon /> Duplicate
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeleteIcon /> Delete
            </MenuItem>
          </Menu>
        </Stack>
      </Grid>
      <Grid item xs={12} display="flex" flexWrap='wrap' alignItems="center" columnGap={0.5}>
        <Tooltip title="bilink page" placement="top" arrow>
          <CircleIcon sx={{ color: '#383eb2', fontSize: '1rem' }} />
        </Tooltip>
        <Typography variant="body1" fontWeight="400" color=" rgb(122, 122, 122) " >
          Your link is   https://66biolinks.com/demo/endpoint
        </Typography>
      
      </Grid>
    </Grid>
  );
};

export default BioLinkTitle;
