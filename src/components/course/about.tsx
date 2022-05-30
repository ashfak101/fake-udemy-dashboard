import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box sx={{p:4}}>

        <Typography sx={{fontSize:'28px',fontWeight:'700',lineHeight:'1.2',fontFamily:'Popins'}} variant='h4'>About this course</Typography>
        <Typography sx={{fontFamily:'Popins',fontWeight:'400',color:'#777',mt:2,fontSize:'18px'}}>Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!</Typography>
    </Box>
  )
}

export default About