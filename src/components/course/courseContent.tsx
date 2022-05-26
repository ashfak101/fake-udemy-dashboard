


import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Typography } from "@mui/material"
import {MainCourse, Module } from "components/types"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from "next/router";
import Link from "next/link";
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PostAddIcon from '@mui/icons-material/PostAdd';
import React, { useEffect } from "react";
interface Props {courses:MainCourse;
    // handleProgress: (e:any,progress:number)=>void
    // setLessonId: (lessonId: number) => void;
    setProgress:(progress:number)=>void
}

const CourseContent = ({ courses ,setProgress}: Props) => {
  const [progressItem,setProgressItem]=React.useState<number>(0)
  
    const handleProgress=(event:any,id:number)=>{
     
        if(event.target.checked){
          setProgressItem((prev:number)=>prev+1)
        }
        if(!event.target.checked){
          setProgressItem((prev:number)=>prev-1)
        }

    }
    useEffect(()=>{
      setProgress(progressItem)
      
    },[progressItem,setProgress])
    return (
        <Box>
            <Typography sx={{fontWeight:'700',p:2,fontSize:'1.1rem',border:'1px solid #d1d7dc',fontFamily:'Poppins'}}>Course content</Typography>
            {courses.courseContent.map((content, index) => (
                <Accordion key={content.id} sx={{ boxShadow: 'none', background: '#f2f7f6', cursor:'pointer'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                       
                    >
                      <Box>
                      <Typography sx={{color:'#333',fontWeight:'700',fontSize:'1rem',fontFamily:'Poppins'}}>Section {index + 1} :    {content.title}</Typography>
                        <Typography sx={{fontSize:'13px'}}> 0/{content.length} | {content.duration}min </Typography>
                      </Box>
                    </AccordionSummary>
                  {
                      content.module.map((lesson:Module, index:number) => (
                  
                        <AccordionDetails  key={lesson.id}  sx={{ mt: "","&:hover":{background:'#d1d7dc'} }}>   <Box sx={{display:'flex',alignItems:'center'}}> <Checkbox onChange={()=>handleProgress(event,lesson.id)}/><Link href={`/courses/${courses.courseName}/learn/${content.id}/${lesson.id}`}>
                           
                            <Typography  sx={{fontFamily:'Popins'}}>  
                         {lesson.id} . {lesson.lessonTitle}
                        
                        </Typography>
                          
                          </Link>  </Box>
                        {
                            lesson.video ? <Box sx={{display:'flex',fontSize:'14px',color:'#1c1d1f;',alignItems:'center',px:6}}><SlowMotionVideoIcon sx={{fontSize:'17px',mr:1}}/>   {lesson.duration}min</Box> : <Box sx={{display:'flex',fontSize:'14px',color:'#1c1d1f;',alignItems:'center',px:6}}><PostAddIcon sx={{fontSize:'17px',color:'#333',mr:1}}/>   {lesson.duration}min</Box>
                        }
                    </AccordionDetails>
                   
                      ))
                  }
                </Accordion>))}
        </Box>
    )
}
export default CourseContent