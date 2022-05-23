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
   <Box sx={{ height: '610px',overflowY:'auto'}}>
      {module?.video ? <Box>
        <ReactPlayer controls={true} url={module.video} width='100%'
          height='600px' style={{width:'100%'}}/> 
      </Box>:<Box sx={{px:25}}>
            <div dangerouslySetInnerHTML={{__html: module?.content}}/>
        </Box>}
   </Box>
  )
}

export default LessonDetails