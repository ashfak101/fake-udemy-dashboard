import { Box, Button, CircularProgress, Typography } from "@mui/material"
import ReplyIcon from '@mui/icons-material/Reply';
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
const CourseNav = () => {
  return (
    <Box sx={{ height: { xs:'20vh',md:'8vh'},display:'flex',justifyContent:'space-between',alignItems:'center',background:'#1c1d1f',color:'#fff',flexDirection:{
      xs:'column',md:'row'
    } }}>
      <Box sx={{display:'flex',alignItems:'center',}}> <Link href='/'>
      <Typography variant="h3" sx={{ display: {  md: 'block', lg: 'block' }, color: '#fff', fontSize: '35px', fontWeight: '600', fontFamily: 'Roboto sans-serif', letterSpacing: '1px',pr:2,borderRight:'1px solid #fff' }}>udemy<Box sx={{ display: 'inline', position: 'absolute', left: '1px', top: '11px', fontWeight: 'bold', color: '#a435f0' }}>^</Box></Typography>
      </Link>
        <Typography variant="h5" sx={{
          display: {  lg: 'block' },
          color: '#fff', fontSize: '20px',fontWeight:'700', ml: 4, '&:hover': {
            color: '#5624d0'
          }
        }}>Web Design for Web Developers: Build Beautiful Websites!
        </Typography></Box>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <Typography sx={{display:'flex',alignItems:'center',mr:2}}><StarIcon/>  Leave a rating</Typography>
           <Typography sx={{display:'flex',alignItems:'center',mr:2}}>   <CircularProgress variant="determinate" value={100} /> your progress</Typography>
           <Button>Share <ReplyIcon/></Button>
        </Box>
    </Box>
  )
}

export default CourseNav