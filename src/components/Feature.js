import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IconButton } from '@mui/material';
import * as Icons from "@mui/icons-material"

export default function Feature({feature}){
    return(
      <Box 
        component={'div'}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          maxWidth: "40vh",
          maxHeight: 'inherit',
          margin: 2,
          padding: 2,
        }}
      >
        <IconButton>
            {React.createElement(Icons[feature.icon], {style: {fontSize: '4rem', color: 'white'}})}         
        </IconButton>
        <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: '400', color: 'white' }}>
          {feature.heading}
        </Typography>
        <Typography
          component={'p'} 
          variant='body2'
          gutterBottom
          sx={{
            fontSize: '1.5rem',
            fontWeight: "400",
            pt: 2,
            color: "white",
            textTransform: "capitalize"
          }}
        >
          {feature.description}
        </Typography>
      </Box>
    )
}
