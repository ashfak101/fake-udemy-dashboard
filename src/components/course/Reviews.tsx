import {
  Avatar,
  Container,
  FormControl,
  InputLabel,
  LinearProgress,
  Rating,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import UserReview from "./UserReview";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid black",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: -16,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Reviews = () => {
  const [ratingValue, setRatingValue] = React.useState<number | null>(4.5);
  const [progress, setProgress] = React.useState(0);
  const [age, setAge] = React.useState("");

  const [value, setValue] = React.useState(0);

  const handleChanges = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  React.useEffect(() => {
    setProgress(50);
    // const timer = setInterval(() => {
    //   setProgress((oldProgress) => {
    //     if (oldProgress === 100) {
    //       return 0;
    //     }
    //     const diff = Math.random() * 10;
    //     return Math.min(oldProgress + diff, 100);
    //   });
    // }, 500);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);
  return (
    <div>
      <Box>
        <Container maxWidth="md">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={12}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Student feedback
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} xl={2}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Typography
                    sx={{
                      color: "#b4690e",
                      fontSize: "64px",
                      fontWeight: "bold",
                    }}
                  >
                    4.6
                  </Typography>
                  <Typography>
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating
                        sx={{ fontSize: "16px" }}
                        precision={0.5}
                        name="read-only"
                        value={ratingValue}
                        readOnly
                      />
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#b4690e",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Tutorial rating
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} xl={10} sx={{ marginTop: "10px" }}>
                <Box
                // sx={{
                //   flexGrow: 1,
                //   bgcolor: "background.paper",
                //   display: "flex",
                //   height: 224,
                // }}
                >
                  <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={value}
                    onChange={handleChanges}
                    aria-label="Vertical tabs example"
                    sx={{
                      borderRight: 1,
                      borderColor: "divider",
                      marginTop: "6px",
                    }}
                  >
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progress}
                              />
                            </Box>
                            <Box>
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                            <Typography>50%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progress}
                              />
                            </Box>
                            <Box>
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                            <Typography>50%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progress}
                              />
                            </Box>
                            <Box>
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                            <Typography>50%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progress}
                              />
                            </Box>
                            <Box>
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                            <Typography>50%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(3)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progress}
                              />
                            </Box>
                            <Box>
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                            <Typography>50%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(4)}
                    />
                  </Tabs>
                </Box>
              </Grid>
              <Grid item xs={12} xl={12}>
                <Item sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "black  ",
                    }}
                  >
                    Reviews
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} xl={12}>
                <Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={2}
                      sx={{ borderBottom: "1px solid lightgray" }}
                    >
                      <Grid item xs={12} xl={9}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Search>
                            <SearchIconWrapper>
                              <SearchIcon
                                sx={{
                                  backgroundColor: "black",
                                  color: "white",
                                  fontSize: "40px",
                                }}
                              />
                            </SearchIconWrapper>
                            <StyledInputBase
                              placeholder="Search Reviews"
                              inputProps={{ "aria-label": "search" }}
                            />
                          </Search>
                        </Item>
                      </Grid>
                      <Grid item xs={12} xl={3}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                              <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                              >
                                <MenuItem value="">
                                  <em>All ratings</em>
                                </MenuItem>
                                <MenuItem value={10}>Five Stars</MenuItem>
                                <MenuItem value={20}>Four Stars</MenuItem>
                                <MenuItem value={30}>Three Stars</MenuItem>
                                <MenuItem value={40}>Two Stars</MenuItem>
                                <MenuItem value={50}>One Stars</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Item>
                      </Grid>
                      <Grid item xs={12} xl={12}>
                        <Item
                          sx={{
                            boxShadow: "0",
                            backgroundColor: "transparent",
                          }}
                        >
                          <TabPanel value={value} index={0}>
                            <UserReview />
                          </TabPanel>
                          <TabPanel value={value} index={1}>
                            <UserReview />
                          </TabPanel>
                          <TabPanel value={value} index={2}>
                            <UserReview />
                          </TabPanel>
                          <TabPanel value={value} index={3}>
                            <UserReview />
                          </TabPanel>
                          <TabPanel value={value} index={4}>
                            <UserReview />
                          </TabPanel>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Reviews;
