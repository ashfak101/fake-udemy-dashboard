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
import React, { useEffect } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

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
  const [progressOne, setProgressOne] = React.useState(0);
  const [progressTwo, setProgressTwo] = React.useState(0);
  const [progressThree, setProgressThree] = React.useState(0);
  const [progressFour, setProgressFour] = React.useState(0);
  const [progressFive, setProgressFive] = React.useState(0);
  const [value, setValue] = React.useState(0) as any;
  const [rateValueOne, setRateValueOne] = React.useState(1);
  const [rateValueTwo, setRateValueTwo] = React.useState(2);
  const [rateValueThree, setRateValueThree] = React.useState(3);
  const [rateValueFour, setRateValueFour] = React.useState(4);
  const [rateValueFive, setRateValueFive] = React.useState(5);
  // const [reviews, setReviews] = React.useState([]);
  const [filterReview, setFilterReview] = React.useState([]);

  const { reviews } = useSelector((state: State) => state.reviews);

  console.log(filterReview);

  const dispatch = useDispatch();

  const handleChanges = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as any);
  };

  React.useEffect(() => {
    if (reviews.length === 0) {
      fetch("/assets/review.json")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "REVIEW_FETCH",
            payload: data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const filter = reviews.filter((review: any) => {
      if (value == 0) {
        // show all reviews
        return true;
        // return review.rating == 5;
      }
      if (value == 1) {
        return review.rating == 5;
      }
      if (value == 2) {
        return review.rating == 4;
      }
      if (value == 3) {
        return review.rating == 3;
      }
      if (value == 4) {
        return review.rating == 2;
      }
      if (value == 5) {
        return review.rating == 1;
      }
    });
    setFilterReview(filter);
    setProgressOne(55);
    setProgressTwo(32);
    setProgressThree(10);
    setProgressFour(2);
    setProgressFive(1);
  }, [value, reviews]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    const filter = reviews.filter((review: any) => {
      return review.userName.toLowerCase().includes(search.toLowerCase());
    });
    setFilterReview(filter);
  };

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
                <Box>
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
                      // label={
                      //   <>
                      //     <Box sx={{ display: "flex", alignItems: "center" }}>
                      //       <Box sx={{ width: "500px", marginRight: "10px" }}>
                      //         <LinearProgress
                      //           variant="determinate"
                      //           value={progressOne}
                      //         />
                      //       </Box>
                      //       <Box>
                      //         <Rating
                      //           name="read-only"
                      //           value={rateValueFive}
                      //           readOnly
                      //         />
                      //       </Box>
                      //       <Typography>{progressOne}%</Typography>
                      //     </Box>
                      //   </>
                      // }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progressOne}
                              />
                            </Box>
                            <Box>
                              <Rating
                                name="read-only"
                                value={rateValueFive}
                                readOnly
                              />
                            </Box>
                            <Typography>{progressOne}%</Typography>
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
                                value={progressTwo}
                              />
                            </Box>
                            <Box>
                              <Rating
                                name="read-only"
                                value={rateValueFour}
                                readOnly
                              />
                            </Box>
                            <Typography>{progressTwo}%</Typography>
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
                                value={progressThree}
                              />
                            </Box>
                            <Box>
                              <Rating
                                name="read-only"
                                value={rateValueThree}
                                readOnly
                              />
                            </Box>
                            <Typography>{progressThree}%</Typography>
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
                                value={progressFour}
                              />
                            </Box>
                            <Box>
                              <Rating
                                name="read-only"
                                value={rateValueTwo}
                                readOnly
                              />
                            </Box>
                            <Typography>{progressFour}%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(4)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "500px", marginRight: "10px" }}>
                              <LinearProgress
                                variant="determinate"
                                value={progressFive}
                              />
                            </Box>
                            <Box>
                              <Rating
                                name="read-only"
                                value={rateValueOne}
                                readOnly
                              />
                            </Box>
                            <Typography>{progressFive}%</Typography>
                          </Box>
                        </>
                      }
                      {...a11yProps(5)}
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
                              onChange={handleSearch}
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
                                value={value}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                              >
                                {/* <MenuItem value="">
                                  <em>All ratings</em>
                                </MenuItem> */}
                                <MenuItem value={0}>All ratings</MenuItem>
                                <MenuItem value={1}>Five Stars</MenuItem>
                                <MenuItem value={2}>Four Stars</MenuItem>
                                <MenuItem value={3}>Three Stars</MenuItem>
                                <MenuItem value={4}>Two Stars</MenuItem>
                                <MenuItem value={5}>One Stars</MenuItem>
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
                            <UserReview reviews={filterReview} />
                          </TabPanel>
                          <TabPanel value={value} index={1}>
                            <UserReview reviews={filterReview} />
                          </TabPanel>
                          <TabPanel value={value} index={2}>
                            <UserReview reviews={filterReview} />
                          </TabPanel>
                          <TabPanel value={value} index={3}>
                            <UserReview reviews={filterReview} />
                          </TabPanel>
                          <TabPanel value={value} index={4}>
                            <UserReview reviews={filterReview} />
                          </TabPanel>
                          <TabPanel value={value} index={5}>
                            <UserReview reviews={filterReview} />
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
