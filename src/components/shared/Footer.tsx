import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <div>
      <Box sx={{ background: "#1C1D1F" }}>
        <Box sx={{ borderBottom: "1px solid gray" }}>
          <Box sx={{ flexGrow: 1, mx: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} xl={10}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "1.3rem",
                      color: "white",
                    }}
                  >
                    Teach the world online
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Create an online video course, reach students across the
                    globe, and earn money
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4} xl={2}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Button
                    sx={{
                      border: "1px solid white",
                      width: "155.34px",
                      height: "48px",
                      borderRadius: "0px",
                    }}
                  >
                    <Typography sx={{ color: "white", textTransform: "none" }}>
                      Teach on Udemy
                    </Typography>
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ borderBottom: "1px solid gray" }}>
          <Box sx={{ flexGrow: 1, mx: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} xl={7}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "1.3rem",
                      color: "white",
                      marginTop: "15px",
                    }}
                  >
                    Top companies choose{" "}
                    <span style={{ color: "#CEC0FC" }}>Udemy Business</span> to
                    build in-demand career skills.
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4} xl={5}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid item xs={8} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Image
                            src="/assets/images/nasdaq.svg"
                            width="115px"
                            height="44px"
                            alt="nasdaq"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={4} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Image
                            src="/assets/images/volkswagen.svg"
                            width="44px"
                            height="44px"
                            alt="volkswagen"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={4} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Image
                            src="/assets/images/box.svg"
                            width="67px"
                            height="44px"
                            alt="box"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={8} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Image
                            src="/assets/images/netapp.svg"
                            width="115px"
                            height="44px"
                            alt="netapp"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={8} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Image
                            src="/assets/images/eventbrite.svg"
                            width="115px"
                            height="44px"
                            alt="eventbrite"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Box sx={{ flexGrow: 1, mx: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} xl={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    backgroundColor: "transparent",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={8} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Udemy Business
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Teach on Udemy
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Get the app
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            About us
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Contact us
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={4} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Careers
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Blog
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Help and Support
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Affiliate
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Investors
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={4} xl={2}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Terms
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Privacy Policy
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Cookie settings
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Sitemap
                          </Typography>
                          <Typography
                            sx={{ textAlign: "left", color: "white" }}
                          >
                            Accessibility statement
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={4} xl={2}>
                <Item
                  sx={{
                    boxShadow: "0",
                    backgroundColor: "transparent",
                  }}
                >
                  <Button
                    sx={{
                      border: "1px solid white",
                      width: "140px",
                      height: "40px",
                      borderRadius: "0px",
                    }}
                  >
                    <Typography sx={{ color: "white", textTransform: "none" }}>
                      English
                    </Typography>
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Box sx={{ flexGrow: 1, mx: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} xl={6}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Image
                      src="/assets/images/udemylogofooter.svg"
                      width="91px"
                      height="34px"
                      alt="udemylogofooter"
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={4} xl={6}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Typography
                    sx={{
                      textAlign: "right",
                      marginRight: "70px",
                      color: "white",
                    }}
                  >
                    &copy; 2022 Udemy, Inc.
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
