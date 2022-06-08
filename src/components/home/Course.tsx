import {
  Avatar,
  Box,
  CardHeader,
  Container,
  Divider,
  IconButton,
  LinearProgress,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { MainCourse } from "components/types";
import Image from "next/image";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";

interface Props {
  data: MainCourse[];
}
const Course = ({ data }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [courseID, setCourseId] = useState<string | null>();
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const id = localStorage.getItem("id");
      const progress: any = localStorage.getItem("progress");

      setCourseId(id);
      setValue(progress);
    }
  }, []);

  return (
    <Box sx={{ marginBottom: "128px" }}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ width: "240px", height: "245.34px" }}>
          <Paper sx={{ cursor: "pointer", position: "relative" }} elevation={0}>
            <Box sx={{ position: "absolute", zIndex: "1", right: "0" }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{
                    ml: 2,
                    background: "white",
                    borderRadius: "0",
                    marginTop: "6px",
                    marginRight: "6px",
                  }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
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
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>Lists</MenuItem>
                <MenuItem>You have no list</MenuItem>
                <Divider />
                <MenuItem>
                  <ReplySharpIcon
                    sx={{ transform: " scaleX(-1)", marginRight: "10px" }}
                  >
                    <PersonAdd fontSize="small" />
                  </ReplySharpIcon>
                  Share
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              {data.map((courses) => (
                <Link
                  key={courses.id}
                  href={`/courses/${courses.courseName}/learn/lecture/${
                    courseID ? courseID : 1
                  }`}
                  passHref
                >
                  <Box>
                    <Box>
                      <Image
                        src="/assets/images/card.png"
                        alt="udemycard"
                        width="240px"
                        height="135px"
                        className="card-image-design"
                      />
                    </Box>
                    <Box sx={{ px: "10px" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Web Design for Web <br /> Developers Build Beautiful...
                      </Typography>

                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "14px",
                          mt: "10px",
                          fontWeight: "400",
                          cursor: "pointer",
                          "&:hover": { color: "#5624d0" },
                        }}
                      >
                        Jonas Schmedtmann
                      </Typography>

                      <LinearProgress
                        variant="determinate"
                        value={value}
                        color="secondary"
                        sx={{ color: "#5624D0", marginTop: "10px" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          {Math.round(value)}% Complete
                        </Typography>{" "}
                        <Rating
                          sx={{ fontSize: "12px", marginTop: "4px" }}
                          name="read-only"
                          value={5}
                          readOnly
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "12px",
                          mt: "2px",
                          fontWeight: "300",
                          textAlign: "right",
                          pr: 0,
                        }}
                      >
                        Leave a rating
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Course;
