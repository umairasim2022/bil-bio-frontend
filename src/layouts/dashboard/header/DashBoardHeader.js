import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'

// router
import { Link as RouterLink, useNavigate, Outlet } from 'react-router-dom';
// redux 
import { useSelector, useDispatch } from 'react-redux'
// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import axios from "axios";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemText from '@mui/material/ListItemText';
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Tag from '@mui/icons-material/Tag';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ConstructionIcon from '@mui/icons-material/Construction';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import ContrastIcon from '@mui/icons-material/Contrast';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BuildIcon from '@mui/icons-material/Build';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';

// component
import { logoutUser, resetUser } from '../../../redux/slices/auth/authSlice'
import LoadingScreen from '../../../components/LoadingScreen';
import Logo from '../../../components/Logo';
import useAuth from '../../../hooks/useAuth';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DashBoardHeader = () => {
  const dispatch = useDispatch()
  const auth = useAuth()
  const navigate = useNavigate();
  console.log('myauth', auth)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //  state getting from logout api 
  const { isError, isSuccess, isLoading, user } = useSelector(state => state?.user)


  const handleLogout = async (e) => {
    window.location.reload()
    await dispatch(logoutUser())
    navigate('/auth/login')


  }  // status from api  
  const { status, message } = useSelector(state => state?.user?.user)
  // handle error and success message and rendering of the page after logout 
  useEffect(() => {
    if (isError) {
      toast.error(message)
      navigate('/dashboard')

    }

    if (isSuccess) {
      if (status === 'sucess') {
        console.log('1');
        toast.success(message, {
          toastId: 'success12',
        })   // message is api response  with when api response status is success

      }
    }
    if (isSuccess) {
      if (status === 'failed') {
        toast.error(message, {
          toastId: 'error12',

        })
        navigate('/dashboard')

        // message is api response  with either api response status is failed
      }
    }
    console.log('myvalues#', isError, isSuccess)
    dispatch(resetUser())
    console.log('myvalues#', isError, isSuccess)
  }, [isError, isSuccess, status, navigate])


  if (isLoading) {
    return( <LoadingScreen /> )
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ background: '#161A38' }}>
          <Container
            maxWidth="xl"
            component="Box"
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Box sx={{ flexGrow: 1 }} noWrap component="a" href="/">
              <Logo />
            </Box>

            <Box sx={{ flexGrow: { xs: 0, sm: 0 } }}>
              <Button variant="text" sx={{ mr: 1 }}>
                Dashboard
              </Button>
              <IconButton onClick={handleOpenUserMenu} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography> {auth?.user?.displayName} </Typography>

                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>

                <Divider />

                <MenuItem onClick={() => handleLogout()}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <ListItemText >Logout</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default DashBoardHeader;
