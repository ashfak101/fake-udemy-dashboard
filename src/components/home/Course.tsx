import { Box, Container, LinearProgress, Paper, Rating, Typography } from '@mui/material'
import { MainCourse } from 'components/types'
import Image from 'next/image'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
interface Props {
  data:MainCourse[]
}
const Course = ({data}:Props) => {

  const [courseID,setCourseId]=useState<string | null>()
  const [value,setValue]=useState<any>(0)
 useEffect(()=>{
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const id=localStorage.getItem('id')
    const progress=localStorage.getItem('progress')

    setCourseId(id)
    setValue(progress)
  }
 },[])
 
  return (
    <Box>
        <Container maxWidth='md'sx={{mt:10}}>
            <Box sx={{width:'230px',height:'229px'}}>
          { data.map(courses => <Paper key={courses.id} elevation={3}>
                  <Box>
                  <Image src="/assets/images/card.png" alt='' width='230px' height='129px'/>
                  </Box>
                   <Box sx={{px:'10px'}}>
                   <Typography sx={{color:'black',fontSize:'14px',fontWeight:'700'}}>Web Design for Web <br /> Developers Build Beautiful..</Typography>
                 <Link href={`/courses/${courses.courseName}/learn/lecture/${courseID ? courseID : 1}`} passHref><Typography sx={{color:'black',fontSize:'14px',mt:'2px',fontWeight:'400',cursor:'pointer','&:hover':{color:'#5624d0'}}}>Jonas Schmedtmann , Web Develper,Designer and Teacher</Typography></Link>
                    <LinearProgress variant="determinate" value={value} />
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Typography sx={{fontSize:'12px'}}>{Math.round(value)}% Complete</Typography><Rating  sx={{fontSize:'12px'}} name="read-only" value={5} readOnly />
                    </Box>
                    <Typography sx={{color:'black',fontSize:'12px',mt:'2px',fontWeight:'300',textAlign:'right',pr:1}}>Leave a rating</Typography>
                    
                   </Box>
             </Paper>)}
            </Box>
        </Container>
    </Box>
  )
}

export default Course