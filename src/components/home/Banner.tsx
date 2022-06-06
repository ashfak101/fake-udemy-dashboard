import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
// hello world

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Banner = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: "#1c1d1f", height: "138px" }}>
      <Container maxWidth="md">
        <Box sx={{ pt: "45px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontSize: "2.2rem",
              fontWeight: "900",
              letterSpacing: "-.05rem",
              lineHeight: "1.25",
              fontFamily: "serif",
            }}
          >
            My learning
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                color: "#fff",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#BBBCBC",
                  border: "3px solid #BBBCBC",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#fff",
                },
                "& .MuiTab-textColorPrimary": {
                  color: "#fff",
                },
                "& .MuiTab-root": {
                  p: 0,
                  mr: 1,
                  fill: "#fff",
                  fontSize: "16px",
                  color: "#fff",
                  textTransform: "capitalize",
                  letterSpacing: "0px",
                  fontFamily: "Popins",
                  fontWeight: "700",
                },
              }}
            >
              <Tab
                label={
                  <>
                    {" "}
                    <Typography sx={{ textTransform: "none" }}>
                      All courses
                    </Typography>{" "}
                  </>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <>
                    {" "}
                    <Typography sx={{ textTransform: "none" }}>
                      My Lists
                    </Typography>{" "}
                  </>
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <>
                    {" "}
                    <Typography sx={{ textTransform: "none" }}>
                      Wishlist
                    </Typography>{" "}
                  </>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
