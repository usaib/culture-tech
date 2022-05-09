import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Card, CardMedia, Stack, CardContent } from "@mui/material";
import { Add } from "@mui/icons-material";

export const Featured = ({ featurevideo, setData, setOpen }) => {
  const pRef = useRef();
  const [startVideo, setStartVideo] = useState(false);
  function openModal(link) {
    setOpen(true);
    setData(link);
  }
  function playVideo() {
    setStartVideo(true);
    pRef.current.style.height = "0";
  }
  useEffect(() => {
    let cancel = false;
    setTimeout(() => {
      if (!cancel) {
        playVideo();
      }
    }, 5000);
    setInterval(() => {
      if (!cancel) {
        setStartVideo(false);
        pRef.current.style.height = "100px";
      }
    }, 35000);
    return () => {
      return (cancel = true);
    };
  }, []);

  return (
    <Card
      component={"div"}
      sx={{
        height: "500px",
        position: "relative",
        backgroundColor: "#1b1b1b  !important",
        boxShadow: "none !important",
      }}
    >
      {!startVideo && (
        <CardMedia
          component="img"
          image={featurevideo.image}
          sx={{ height: "100%" }}
        />
      )}
      {startVideo && (
        <CardMedia
          component="iframe"
          src={`https://www.youtube.com/embed/${featurevideo.videoId}?autoplay=1&mute=1&enablejsapi=1&controls=0&start=0&end=30`}
          sx={{ border: "none", height: "100%" }}
        />
      )}
      <CardContent
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: !startVideo && "#1b1b1b54 !important",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "50%",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "left",
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "2rem",
              letterSpacing: "0.6px",
              marginBottom: "12px",
              fontFamily: "Volkhov",
            }}
          >
            {featurevideo.heading}
          </Typography>
          <Typography
            ref={pRef}
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "400",
              height: "100px",
              maxWidth: { lg: "500px", xs: "400px" },
              display: " -webkit-box",
              WebkitLineClamp: "5",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginBottom: "12px",
              transition: "all  ease-in-out",
              transitionDuration: "0.85s",
            }}
          >
            {featurevideo.description}
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                openModal(featurevideo.videoId);
              }}
              sx={{
                backgroundColor: "#D16002",
                color: "#fff",
                borderRadius: "12px",
                fontSize: "0.95rem",
                letterSpacing: "0.3px",
                fontWeight: "600",
                padding: "10px 35px",
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "#b15305",
                },
              }}
            >
              Watch
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 600,
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                backdropFilter: "blur(5px)",
                marginLeft: "13px",
                minWidth: "50px",
                padding: "6px 0px",
                "&:hover": {
                  color: "#fff",
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Add />
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
