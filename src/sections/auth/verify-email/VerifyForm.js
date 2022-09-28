// @mui
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify'

import { Box, Link, Container, Typography } from '@mui/material';
// layouts
// components
import Page from '../../../components/Page';
// sections
// assets



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

export default function VerifyForm() {
    const baseUrl = window.config.API_URL;
    const navigate = useNavigate()
    const { id, token } = useParams()
    const [useremail, setstateEmail] = useState('')

    useEffect(() => {
        getEmail()
    }, []);
    const getEmail = async () => {
        const path = 'api/user/verify-user-email'
        const url = baseUrl + path;
        try {
            const emailResponse = await axios.get(`/${url}/${id}/${token}`)
            console.log('emailres', emailResponse.data.email)
            const message = emailResponse?.data?.message
            const status = emailResponse?.data?.status
            if (status === 'success') {
                toast.success('Email Verified Successfully.')
                navigate('/auth/login')
            }
            if (status === 'failed') {
                toast.error(message)
            }

        } catch (error) {
            const message = error.message
            toast.error(message)
            console.log('emailerrir', error.message)

        }

    }

    return (
        <Page title="New Password">
            {/* <LogoOnlyLayout /> */}

            <Container>
                <ContentStyle sx={{ textAlign: 'center' }}>


                    <Typography variant="h3" gutterBottom>
                        Checking user Email.
                    </Typography>
                </ContentStyle>
            </Container>
        </Page>
    );
}
