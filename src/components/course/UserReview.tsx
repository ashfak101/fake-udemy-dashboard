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

import InputBase from "@mui/material/InputBase";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

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

const UserReview = ({ reviews }: any) => {
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

  // console.log(reviews);

  return (
    <div>
      <Box>
        {reviews.map((review: any) => (
          <Box key={review.id} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={1}>
                <Item
                  sx={{
                    boxShadow: "0",
                    backgroundColor: "transparent",
                  }}
                >
                  <Avatar sx={{ backgroundColor: "black", fontSize: "8px" }}>
                    {review.userName}
                  </Avatar>
                </Item>
              </Grid>
              <Grid item xs={12} xl={11}>
                <Item
                  sx={{
                    boxShadow: "0",
                    backgroundColor: "transparent",
                    marginTop: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "black",
                      marginBottom: "8px",
                    }}
                  >
                    {review.userName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <Box>
                      <Rating name="read-only" value={review.rating} readOnly />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "black",
                          marginLeft: "10px",
                          marginTop: "-5px",
                        }}
                      >
                        {review.reviewTime}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "black",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    {review.userReview}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "black",
                      fontSize: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    Was this review helpful?
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ marginRight: "10px" }}>
                      <ThumbUpOffAltIcon
                        sx={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          fontSize: "32px",
                          padding: "3px",
                          color: "#1c1d1f",
                        }}
                      />
                    </Box>
                    <Box sx={{ marginRight: "10px" }}>
                      <ThumbDownOffAltIcon
                        sx={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          fontSize: "32px",
                          padding: "3px",
                          color: "#1c1d1f",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "black",
                          marginTop: "-8px",
                        }}
                      >
                        Report
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default UserReview;
