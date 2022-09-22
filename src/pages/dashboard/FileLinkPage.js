import React, { Component } from 'react';

// mui
import { styled } from '@mui/material';

// Component
import { FileLinkTitle, FileLinkMain } from '../../sections/@dashboard/fileLinkSection';

//  style 
const RootStyle = styled('div')(({ theme }) => ({
    // spacing from top bottom left right to the title container
    padding: theme.spacing(5, 15),
    width: '100%',
    //   background: theme.palette.background.paper,
    // [theme.breakpoints.down('md')]: {
    //   padding: theme.spacing(15, 5),
    // },
}));

const FileLinkPage = () => {
    return (
        <RootStyle>
            <FileLinkTitle />
            <FileLinkMain />
        </RootStyle>
    );
};

export default FileLinkPage;
