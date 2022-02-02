import { FacebookRounded, Twitter, YouTube } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  useStyles,
  footerLinks,
} from "../styles/homepageStyles";

export default function Footer(){
  const classes = useStyles();
    return(
      <Box sx={{bgcolor: "white"}}>
      <Container
          maxWidth="lg"
          sx={{
            marginTop: "40px",
            padding: { md: "1.5em 1em " },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "The Nautigal,cursive !important",
                    fontSize: "4em",
                    letterSpacing: "1.05px !Important",
                    color: "#F3A611",
                  }}
                >
                  Dance Pakistan
                </Typography>
                <Typography
                  className={classes.paragraph}
                  sx={{ fontSize: "1em !important", textAlign: "justify" }}
                >
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry.printing and typesetting industry.
                </Typography>
              </Stack>
            </Grid>
            {footerLinks.map((item) => (
              <Grid item md={2} sm={3} xs={12}>
                <Stack sx={{ alignItems: { md: "center", xs: "flex-start" } }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1.2em",
                      color: "#D16002",
                      fontWeight: "bold",
                    }}
                  >
                    {item.secTitle}
                  </Typography>
                  <List className={classes.footerLinks}>
                    {item.Links.map((link) => (
                      <ListItem>
                        <Link to={'#'}>{link}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            marginTop: "20px",
            backgroundColor: "#D16002",
            padding: "1em",

            marginLeft: 5,
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
                  <Link to={'#'}>
                    <FacebookRounded
                      sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
                    />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'#'}>
                    <YouTube
                      sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
                    />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'#'}>
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
    )
}