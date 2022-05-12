import { Box, Container, LinearProgress, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Course = () => {
  return (
    <Box>
        <Container maxWidth='md'sx={{mt:10}}>
            <Box sx={{width:'230px',height:'229px'}}>
            <Paper elevation={3}>
                    <Image src="/assets/images/cardimg.jpg" alt='card' width='230px' height='129px'/>
                   <Box sx={{px:'10px'}}>
                   <Typography sx={{color:'black',fontSize:'14px',fontWeight:'700'}}>Web Design for Web <br /> Developers Build Beautiful..</Typography>
                    <Typography sx={{color:'black',fontSize:'14px',mt:'2px',fontWeight:'400'}}>Jonas Schmedtmann , Web Develper,Designer and Teacher</Typography>
                    <LinearProgress />
                    <Typography sx={{color:'black',fontSize:'12px',mt:'2px',fontWeight:'300',textAlign:'right',pr:1}}>Leave a rating</Typography>
                    
                   </Box>
           </Paper>
            </Box>
        </Container>
    </Box>
  )
}

export default Course