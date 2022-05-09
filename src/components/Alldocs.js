import React, { useState } from "react";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { useStyles } from "../styles/documentaryStyles";
export const AllDocumentaries = ({ alldocs, setData, setOpen }) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  function openModal(link) {
    setOpen(true);
    setData(link);
  }

  return (
    <React.Fragment>
      <Card
        className={classes.docCard}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {!isHover && (
          <CardMedia
            component="img"
            image={alldocs.image}
            sx={{ objectFit: "contain !important" }}
          />
        )}
        {isHover && (
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/${alldocs.videoId}?autoplay=1&mute=1&controls=0&loop=1&start=0&end=30&playlist=${alldocs.videoId}`}
            sx={{ border: "none" }}
          />
        )}
        <CardContent className={classes.docContent}>
          <CardActions
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0",
              marginBottom: "0.575rem",
            }}
          >
            <Button
              className={classes.docAct}
              sx={{
                backgroundColor: "#fff",
                color: "#fff !important",
                "&:hover": { backgroundColor: "#fff" },
              }}
              onClick={() => {
                openModal(alldocs.videoId);
              }}
            >
              <PlayArrowSharpIcon sx={{ color: "#000", fontSize: "1.2rem" }} />
            </Button>
            <Button className={classes.docAct}>
              <AddOutlinedIcon sx={{ color: "#fff", fontSize: "1.2rem" }} />
            </Button>
            <Button className={classes.docAct}>
              <ThumbUpAltOutlinedIcon
                sx={{ color: "#fff", fontSize: "1.2rem" }}
              />
            </Button>
            <Button className={classes.docAct}>
              <ThumbDownAltOutlinedIcon
                sx={{ color: "#fff", fontSize: "1.2rem" }}
              />
            </Button>
          </CardActions>
          <Typography
            component="span"
            sx={{
              letterSpacing: "0.3px",
              fontSize: "0.65rem",
              color: "#36bb01",
              fontWeight: 600,
            }}
          >
            Duration:{" "}
            <Typography
              component="span"
              sx={{ color: "#fff", fontSize: "0.65rem" }}
            >
              {alldocs.duration}
            </Typography>
          </Typography>
          <Typography className={classes.docDes}>
            {alldocs.description}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
