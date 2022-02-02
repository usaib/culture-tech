import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FiberManualRecord } from '@mui/icons-material';

export default function AllDocumentaries({alldocs}) {

  return (
    <Card sx={{ maxWidth: 345, ml: 5 , mt: 2, bgcolor: '#333333', borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="194"
        image={alldocs.images}
        alt="Paella dish"
        sx={{ borderRadius: 3 }}
      />
      <CardHeader
        title={alldocs.heading}
        sx={{color: "#fff"}}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod jklsdfkljaskld jsdnfjkansjfk ksfmklmdfklmask.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FiberManualRecord fontSize='small' sx={{ color: "white" }}/>
          <Typography variant='subtitle2' sx={{ color: "white" }}>Posted</Typography>
        </IconButton>
        <Typography variant='subtitle1' sx={{
            color: "yellowgreen",
            fontWeight: "400",
            ml: 2
        }}>  20 October 2020</Typography>
      </CardActions>
    </Card>
  );
}
