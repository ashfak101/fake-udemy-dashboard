import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const MobileNav = () => {
    const navItems=['Web Development','Mobile Development','Game Development','Enterpreneurship','Business Analytics & Inteligence','Digital Marketing','Graphic Design','IT Certification']
  return (
    <Box sx={{width:'250px'}}> 
        {/* <Box  sx={{position:'absolute',left:'240px',zIndex:10, }}>
        <CloseIcon sx={{color:'black',background:'#fff'}}/>
        </Box> */}
         <Box sx={{ display: 'flex', borderBottom: '1px solid #d1d7dc', p: '20px 10px' }}>
                <Avatar alt="AKemy Sharp" src='AK' sx={{ p: 4, background: 'black' }} />
                <Box sx={{ ml: 1 }}>
                    <Typography sx={{
                        fontSize: '16px', fontWeight: '600', '&:hover': {
                            color: '#5624d0'
                        }, cursor: 'pointer'
                    }}>Hi Ashfakul <br/>Karim </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#999' }}>Welcome back</Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:'center',pl:5}}><ChevronRightIcon/></Box>
            </Box>
            <Box sx={{ borderBottom: '1px solid #d1d7dc', p: '10px 10px' }}>
                <Typography sx={{ fontSize: '14px',fontWeight:'bold',color: '#999', ml: 1, mt: 1,'&:hover':{   color:'#5624d0'},cursor:'pointer' }} >Learn</Typography>
                <Typography sx={{ fontSize: '14px', color: '#333', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Messages</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #d1d7dc', p: '10px 10px' }}>
                <Typography sx={{ fontSize: '14px',fontWeight:'bold',color: '#999', ml: 1, mt: 1,'&:hover':{   color:'#5624d0'},cursor:'pointer' }} >Most Popular</Typography>
                
                {
                    navItems.map((item,index)=>
                        <Typography key={index} sx={{display:'flex',justifyContent:'space-between', fontSize: '14px', color: '#333', ml: 1, mt: 2 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >{item} <ChevronRightIcon/></Typography>
                )
                }
                
            </Box>
            <Box sx={{p: '10px 10px' }}>
            <Typography sx={{ fontSize: '14px',fontWeight:'bold',color: '#999', ml: 1, mt: 1,'&:hover':{   color:'#5624d0'},cursor:'pointer' }} >More from udemy</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Get The app</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 2 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Invite friends</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 2 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Help</Typography>
                <Box sx={{mt:2}}>
                    <Button sx={{border:"1px solid black",borderRadius:'0',px:'35px',color:'#333'}}>English</Button>
                </Box>
            </Box>
    
    </Box>
  )
}

export default MobileNav