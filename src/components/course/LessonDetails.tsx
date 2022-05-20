import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {MainCourse, Module } from "components/types";
import { useRouter } from "next/router";
import React from 'react'
import ReactPlayer from 'react-player/youtube'
interface Props {
  module: Module | undefined;

}
const LessonDetails = ({module}:Props) => {
  const router = useRouter()
  console.log(module)

  
  

  return (
   <Box>
      {module?.video ? <Box>
        <ReactPlayer controls={true} url={module.video} width='100%'
          height='600px' style={{width:'100%'}}/> 
      </Box>:<Box>
            
        </Box>}
   </Box>
  )
}

export default LessonDetails