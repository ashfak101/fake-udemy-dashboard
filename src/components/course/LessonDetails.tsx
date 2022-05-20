import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {MainCourse, Module } from "components/types";
import { useRouter } from "next/router";

interface Props {
  module: Module | undefined;

}
const LessonDetails = ({module}:Props) => {
  const router = useRouter()
  // console.log(courses)

  
  

  return (
   <Box>

   </Box>
  )
}

export default LessonDetails