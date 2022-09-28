// @mui
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// components
import Page from '../../components/Page';
// sections
import { NewPasswordForm } from '../../sections/auth/new-password';
// assets
import { SentIcon } from '../../assets';


// ----------------------------------------------------------------------

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

export default function NewPassword() {
  const baseUrl = window.config.API_URL;

  const { id, token } = useParams()
  const [useremail, setstateEmail] = useState('')

  useEffect(() => {
    getEmail()
  }, []);
  const getEmail = async () => {
    const path = '/api/user/get-email'
    const url = baseUrl + path;

    try {
      const emailResponse = await axios.get(`${url}/${id}/${token}`)
      console.log('emailres', emailResponse.data.email)
      const email = emailResponse.data.email
      setstateEmail(email)

    } catch (error) {
      alert('error')
      console.log('emailerrir', error.message)

    }

  }

  return (
    <Page title="New Password">
      <LogoOnlyLayout />

      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <SentIcon sx={{ mb: 5, mx: 'auto', height: 120 }} />

          <Typography variant="h3" gutterBottom>
            Change Your Password.
          </Typography>



          <Box sx={{ mt: 5, mb: 3 }}>
            <NewPasswordForm email={useremail} />
          </Box>


        </ContentStyle>
      </Container>
    </Page>
  );
}
