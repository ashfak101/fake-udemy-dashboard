import { Box, Button, CircularProgress, Typography } from "@mui/material"
import ReplyIcon from '@mui/icons-material/Reply';
import StarIcon from '@mui/icons-material/Star';
const CourseNav = () => {
  return (
    <Box sx={{ height: '8vh',display:'flex',justifyContent:'space-between',alignItems:'center',background:'#1c1d1f',color:'#fff' }}>
      <Box sx={{display:'flex',alignItems:'center',}}> <Typography variant="h3" sx={{ display: { xs: 'none', md: 'block', lg: 'block' }, color: '#fff', fontSize: '35px', fontWeight: '600', fontFamily: 'Roboto sans-serif', letterSpacing: '1px',pr:2,borderRight:'1px solid #fff' }}>udemy<Box sx={{ display: 'inline', position: 'absolute', left: '1px', top: '11px', fontWeight: 'bold', color: '#a435f0' }}>^</Box></Typography>
        <Typography variant="h5" sx={{
          display: { xs: 'none', lg: 'block' },
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