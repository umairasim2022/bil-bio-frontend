import { Box } from '@mui/material';

import React, { useState } from 'react';

import './bioLinkSectionCSS/bioLink.css';

export default function BioLinkPreview() {
  return (
    <>
      {/* <Box
        sx={{
          //   position: 'relative',
          margin: ' 0 auto',
          //   height: 'auto',
          //   width: 'auto',
          display: 'inline-block',
          textAlign: 'left',
          //   borderRadius: '4rem',
          padding: ' 0.7rem',
          boxShadow: '0 0px 30px rgb(0 0 0 / 20%)',
          border: '1.1rem solid #444546',
          justifyContent: 'flex-end !important',
          overFlow: 'hidden',
          width: '415px',
          height: '825px',
          borderRadius: '3rem',
          position: 'relative',
        }}
      >
        BILL
      </Box> */}

      <div className="biolink-preview-container">
        <div className="biolink-preview">
          <div className="biolink-preview-iframe-container">
            <iframe
              id="biolink_preview_iframe"
              className="biolink-preview-iframe"
              src="https://66biolinks.com/demo/l/link?link_id=29484&preview=c4ca4238a0b923820dcc509a6f75849b"
              title="hello"
              scrolling="no"
            >
              Hello
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
