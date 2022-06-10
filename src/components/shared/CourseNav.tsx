import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  ListItemIcon,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { useEffect, useState } from "react";
import { handleLocalStorage } from "components/types";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PersonAdd } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import { State } from "redux/reducers";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 662,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const labels: { [index: string]: string } = {
  0.5: "Awful, not what I expected at all",
  1: "Awful / Poor",
  1.5: "Poor, pretty disappointed",
  2: "Poor / Average",
  2.5: "Average, could be better",
  3: "Average / Good",
  3.5: "Good, what I expected",
  4: "Good / Amazing",
  4.5: "Amazing, above expectations!",
  5: "Excellent",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

interface Props {
  progress: number;
  totallesson: number;
}
function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ color: "#fff" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const CourseNav = ({ progress, totallesson }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [hover, setHover] = useState(-1);
  const [rateValue, setRateValue] = useState<number | null>(0);
  const [comment, setComment] = useState("");

  const [value, setValue] = useState<any>(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    let pro = 100 / totallesson;
    const result: any = progress * pro;
    handleLocalStorage("progress", result);
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const id = localStorage.getItem("progress");

      setValue(id);
    }
  }, [progress, totallesson]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const { reviews } = useSelector((state: State) => state.reviews);

  const handleSubmit = () => {
    const data = {
      id: Math.random().toString(),
      userName: "Hamdan Ahmed",
      isDisliked: false,
      isLiked: false,
      reviewTime: new Date().toLocaleDateString(),
      // round that rating value
      rating: Math.round(value),
      userReview: comment,
    };
    console.log(data);

    dispatch({
      type: "REVIEW_FETCH",
      payload: [...reviews, data],
    });

    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: { xs: "10vh", md: "6vh" },
        borderBottom: "1px dotted #3e4143",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1c1d1f",
        color: "#fff",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
          cursor: "pointer",
        }}
      >
        {" "}
        <Link href="/">
          <Image
            src="/assets/images/udemylogofooter.svg"
            width="91px"
            height="34.17px"
            alt="udemyfooterlogo"
          />
        </Link>
        <Typography
          variant="h5"
          sx={{
            display: { lg: "block" },
            borderLeft: "0.5px solid #fff",
            pl: 3,
            color: "#fff",
            fontSize: "16px",
            ml: 4,
            "&:hover": {
              color: "#5624d0",
            },
          }}
        >
          Web Design for Web Developers: Build Beautiful Websites!
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 2,
            fontSize: "14px",
            "&:hover": {
              color: "lightgray",
            },
          }}
          onClick={handleOpen}
        >
          <StarIcon /> Leave a rating
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: "30px",
                  top: "37px",
                  cursor: "pointer",
                }}
              />
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                Why did you leave this rating?
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "40px",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ marginBottom: "10px" }}>
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </Box>
                <Rating
                  sx={{ fontSize: "80px", marginBottom: "40px" }}
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  multiline
                  id="fullWidth"
                  placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Button
                  sx={{
                    width: "162.64px",
                    height: "48px",
                    background: "black",
                    borderRadius: "0px",
                    marginTop: "40px",
                    textTransform: "none",
                    "&:hover": {
                      background: "#5624d0",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  <Typography sx={{ color: "white" }}>
                    Save & Continue
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 5,
            fontSize: "14px",
          }}
        >
          {" "}
          <CircularProgressWithLabel
            color="primary"
            sx={{ color: "white", mr: 1 }}
            variant="determinate"
            value={value}
          />{" "}
          your progress
        </Typography>
        <Button
          sx={{
            border: "1px solid #fff",
            color: "#fff",

            px: 4,
            mr: 2,
            borderRadius: "0",
            display: "flex",
            alignItems: "center",
            width: "83.94px",
            height: "40px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              marginTop: "2px",
              marginLeft: "5px",
            }}
          >
            Share
          </Typography>
          <ReplySharpIcon
            sx={{ transform: " scaleX(-1)", marginLeft: "10px" }}
          />
        </Button>
        <Box>
          <Button
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
            sx={{
              border: "1px solid white",
              marginRight: "10px",
              borderRadius: "0px",
              width: "83.94px",
              height: "40px",
            }}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={handleCloses}
            onClick={handleCloses}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
                width: "258px",
                height: "215px",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem sx={{ color: "black", margin: "16px 16px 0px" }}>
              <ListItemIcon>
                <StarIcon fontSize="small" sx={{ color: "black" }} />
              </ListItemIcon>
              Favorite this course
            </MenuItem>
            <MenuItem sx={{ color: "black", margin: "16px 16px 0px" }}>
              <ListItemIcon>
                <FolderIcon fontSize="small" sx={{ color: "black" }} />
              </ListItemIcon>
              Archive this course
            </MenuItem>
            <Divider />
            <MenuItem sx={{ margin: "16px 16px 0px" }}>
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label={
                  <>
                    <Typography>New announcement emails</Typography>
                  </>
                }
              />
            </MenuItem>
            <MenuItem sx={{ margin: "16px 16px 0px" }}>
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label={
                  <>
                    <Typography>Promotional emails</Typography>
                  </>
                }
              />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseNav;
