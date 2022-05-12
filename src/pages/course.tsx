


import { Box } from '@mui/material'
import CourseContent from 'components/course/CourseContent'
import { CourseInterFace } from 'components/types'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'


const Course: NextPage = () => {
            const [course,setCourse]=useState<Array<CourseInterFace>>([])
            
   async function fetchCourse() {
    await fetch('data.json')
        .then(res=> res.json())
        .then(data => 
           setCourse(data)
            
        )
        .catch(err => console.error(err));
}
    
    useEffect(()=>{
       fetchCourse()
        
    },[])
    // console.dir('hello',course)
   
  return (
    <div >
      
     <Box sx={{display:'flex'}}>
          <Box sx={{width:'70%'}}>hello</Box>
          <Box sx={{width:'30%'}}>
          <CourseContent course={course}></CourseContent>
          </Box>
     </Box>
        
    </div>
  )
}

export default Course