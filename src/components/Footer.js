import { FacebookRounded, Twitter, YouTube } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

import { useStyles, footerLinks } from "../styles/homepageStyles";

export default function Footer() {
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "20px",
          backgroundColor: "#D16002",
          padding: "1em",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{ color: "#FFF", fontFamily: "Poppins", fontSize: "1em" }}
            >
              {" "}
              &copy; Dance Pakistan. All rights reserved
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} item>
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
                marginLeft: "auto",
                width: "fit-content",
                "& li": {
                  padding: "0px 16px",
                },
              }}
            >
              <ListItem>
                <Link to={"#"}>
                  <FacebookRounded
                    sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link to={"#"}>
                  <YouTube
                    sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link to={"#"}>
                  <Twitter
                    sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
