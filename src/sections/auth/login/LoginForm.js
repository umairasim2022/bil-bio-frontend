import { useState, useEffect, useRef } from 'react';

import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

// yup
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { loginUser, resetUser } from '../../../redux/slices/auth/authSlice';
// getting link function
import { gettingBioLink } from '../../../redux/slices/getLink/getLinkSlice'
import LoadingScreen from '../../../components/LoadingScreen';

// ----------------------------------------------------------------------

export default function LoginForm() {
  // getting token so auth here is giving token here

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const submitHandler = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginUser(userData));
    reset();
  };

  // handle Api response and status on the basis of status
  const { isError, isSuccess, isLoading, user } = useSelector((state) => state?.user);
  const userToken = useSelector((state) => state?.user?.user);
  console.log('userToken', userToken)

  // getting token and id for gettingLink api 



  // status from api
  const { status, message } = useSelector((state) => state?.user?.user);
  console.log('login_status', status);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      navigate('/auth/login');
    }

    if (isSuccess && status === 'success' && userToken.token) {
      // if (status === 'success') {
      //   if (auth) {
      toast.success(message, {
        toastId: 'success1',
      });
      navigate('/dashboard/links');

      dispatch(gettingBioLink())
      //   }
      // }
    }
    if (isSuccess && status === 'failed') {
      // if (status === 'failed') {
      toast.error(message, {
        toastId: 'error1',
      }); // message is api response  with either api response status is failed
      navigate('/auth/login');
      // }
    }
    console.log('myvalues#', isError, isSuccess);
    dispatch(resetUser());
    console.log('myvalues#', isError, isSuccess);
  }, [isError, isSuccess, status, navigate]);


  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(submitHandler)}>
      <Stack
        spacing={3}
        sx={{
          '& .css-al9d9s-MuiBackdrop-root': {
            padding: { xs: '1rem', sm: '2rem', md: '3rem' },
          },
        }}
      >
        {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}

        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wra" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
          Forgot password?
        </Link>
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type={'submit'}
        variant="contained"
        loading={isSubmitting}
        sx={{ boxShadow: 'none' }}
      >
        Login
      </LoadingButton>
    </FormProvider>
  );
}
