import {
  Box,
  Button,
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

  // get the value from modal text field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // get the data of the rateValue and comment and pass todays date
    const data = {
      value,
      comment,
      date: new Date().toLocaleDateString(),
    };
    console.log(data);
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
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
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
            fontSize: "11px",
            px: 4,
            mr: 2,
            borderRadius: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          Share{" "}
          <ReplySharpIcon
            sx={{ transform: " scaleX(-1)", marginLeft: "10px" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default CourseNav;
