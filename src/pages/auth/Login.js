import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          {/* <Logo />
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Don’t have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Get started
              </Link>
            </Typography>
          )} */}
          <Box
            sx={{
              height:{xs : 0  , sm: 60 }, 
               display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              paddingBottom: 12,
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            component={RouterLink}
            to="/"
          >
            <Logo />
            {/* <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Fizan</span> */}
          </Box>
        </HeaderStyle>

        <Container maxWidth="sm">
          <ContentStyle>
            <Card elavation={30} sx={{ padding: '3rem', variant: 'outlined' }}>
              <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">Sign in</Typography>
                  {/* <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography> */}
                </Box>

                {/* <Tooltip title={capitalCase(method)} placement="right">
                <>
                  <Image
                    disabledEffect
                    src={`https://minimal-assets-api-dev.vercel.app/assets/icons/auth/ic_${method}.png`}
                    sx={{ width: 32, height: 32 }}
                  />
                </>
              </Tooltip> */}
              </Stack>

              {/* <Alert severity="info" sx={{ mb: 3 }}>
              Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
            </Alert> */}

              <LoginForm />

              {/* {smUp && ( */}
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                  Register
                </Link>
              </Typography>
              {/* )} */}
            </Card>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
