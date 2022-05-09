import React from "react";
import { Typography, Button, Paper, Stack } from "@mui/material";
import { useStyles } from "../styles/healthandfitnessStyles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export const HealthandFitnessCard = ({ data, setOpen, setData }) => {
  const classes = useStyles();
  function openModal(link) {
    setOpen(true);
    setData(link);
  }
  return (
    <Stack className={classes.contentCard}>
      <Paper elevation={0} className={classes.thumbnail}>
        <img
          src={data.image}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            maxHeight: "200px",
          }}
        />
      </Paper>
      <Button
        sx={{
          position: "absolute",
          top: "13%",
          left: "50%",
          transform: "translate(-50%,50%)",
        }}
        onClick={() => {
          openModal(data.videoId);
        }}
      >
        {" "}
        <PlayArrowIcon
          className={classes.playBtn}
          sx={{
            background: "rgba( 255, 255, 255, 0.45 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
          }}
        />
      </Button>
      <Stack sx={{ marginLeft: "10px" }}>
        <Typography
          className={classes.ctg}
          sx={{
            fontSize: "1.1rem !important",
            fontWeight: "500",
            display: " -webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {data.heading}
        </Typography>
        <Typography className={[classes.ctg, classes.date]}>
          {data.date}
        </Typography>
      </Stack>
    </Stack>
  );
};
