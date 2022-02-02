import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper, Button, } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Add, PlayArrowOutlined } from '@mui/icons-material';

export default function Featured({ featurevideo }){
    return(
      <Box 
        component={'div'}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          maxWidth: "100%",
          maxHeight: 'inherit',
          margin: 2,
          padding: 2,
        }}
      >
        <Paper 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'transparent', 
            width: '100%',
            minHeight: '60vh',
            pl: 5,
          }}
          elevation={0}
        >
          <Typography 
            variant='h1'
            sx={{
              textAlign: 'left',  
              color: 'white', 
              ml: 4, 
              textTransform: "capitalize", 
              fontWeight: "700",
              fontSize: '4rem',
              mt: 15
            }}
          >
            {featurevideo.heading}
          </Typography>
          <Typography 
            variant='body1'
            sx={{
              ml: 4,
              color: "#fff",
              fontSize: '1.5rem',
              fontWeight: '400',
              lineHeight: '2rem',
              mr: '40vh'
            }}
          >
            {featurevideo.description}
          </Typography>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'start',
              maxWidth: '25%',
              ml: 4,
              mt: 1
            }}>
              <Box 
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                <FiberManualRecordIcon fontSize='small' sx={{ color: '#fff', pt: '0.24rem'}}/>
                <Typography 
                  variant='subtitle1'
                  sx={{
                    color: '#fff',
                    alignSelf: 'center'
                  }}
                >
                  Posted
                </Typography>
              </Box>
              <Box>
                <Typography 
                  sx={{
                    color: 'green',
                    fontWeight: '500'
                }}>
                  {featurevideo.date}
                </Typography>
              </Box>
          </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                maxWidth: '30%',
                ml: 4,
                mt: 2
              }}
            >
              <Button 
                variant="contained" 
                startIcon={<PlayArrowOutlined fontSize='large' />}
                sx={{
                  backgroundColor: '#fff',
                  color: "#222",
                  borderRadius: 3,
                  fontSize: 'medium'
                }}
              >
                Play Now
              </Button>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{
                  backgroundColor: '#aaa',
                  color: "222",
                  borderRadius: 0,
                  fontSize: 'medium'
                }}
              >
                Add to wishlist
              </Button>
            </Box>
        </Paper>
      </Box>
    )
}