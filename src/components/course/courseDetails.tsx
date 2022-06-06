import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import About from "./about";
import Notes from "./notes";
import { CourseInterFace, Module } from "components/types";
import Footer from "components/shared/Footer";

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface Props {
  module: Module;
  lesson: CourseInterFace | undefined;
}
const CourseDetails = ({ module, lesson }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            color: "#333",
            "& .MuiTabs-indicator": {
              backgroundColor: "#fff",
              border: "1px solid #333",
            },

            "& .MuiTab-root": {
              fontSize: "20px",
              p: 0,
              mr: 1,
              color: "#777",
              textTransform: "capitalize",
              letterSpacing: "0px",
              fontFamily: "Popins",
              fontWeight: "700",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#333",
            },
          }}
        >
          <Tab label={<SearchIcon />} {...a11yProps(0)} />
          <Tab label="Overview" {...a11yProps(1)} />
          <Tab label="Notes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Notes module={module} lesson={lesson} />
      </TabPanel>
      <Footer />
    </Box>
  );
};

export default CourseDetails;
