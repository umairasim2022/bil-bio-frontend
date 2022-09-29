import React, { Component } from 'react';

// mui
import { styled } from '@mui/material';

// Component
import { BioLinkTitle, BioLinkMainSection } from '../../sections/@dashboard/bioLinkSection';

//  style
const RootStyle = styled('div')(({ theme }) => ({
  // spacing from top bottom left right to the title container
  padding: theme.spacing(5, 30),
  width: '100%',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10, 5),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10, 2),
  },
}));

const BioLinkPage = () => {
  return (
    <RootStyle>
      <BioLinkTitle />
      <BioLinkMainSection />
    </RootStyle>
  );
};

export default BioLinkPage;
