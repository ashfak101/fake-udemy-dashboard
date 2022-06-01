import { Box, Button, Typography } from "@mui/material"
import ReplyIcon from '@mui/icons-material/Reply';
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
import { useEffect, useState } from "react";
import { handleLocalStorage } from "components/types";
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
interface Props {
  progress: number
  totallesson: number
}
function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{color:'#fff'}}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const CourseNav = ({ progress, totallesson }: Props) => {
  const [value, setValue] = useState<any>(0)
  useEffect(() => {
    let pro = (100 / totallesson)
    const result: any = progress * pro
    handleLocalStorage('progress', result)
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const id = localStorage.getItem('progress')

      setValue(id)
    }

  }, [progress, totallesson, value])
  return (
    <Box sx={{
      height: { xs: '10vh', md: '6vh' }, borderBottom: '1px dotted #3e4143', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1c1d1f', color: '#fff', flexDirection: {
        xs: 'column', md: 'row'
      }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', }}> <Link href='/'>
        <Typography variant="h3" sx={{ display: { xs: 'none', md: 'block', lg: 'block' }, color: '#fff', fontSize: '35px', fontWeight: '600', fontFamily: 'Poppins sans-serif', letterSpacing: '1px', pr: 2, cursor: 'pointer' }}>udemy<Box sx={{ display: 'inline', position: 'absolute', left: '0px', top: '0px', fontWeight: 'bold', color: '#a435f0' }}>^</Box></Typography>
      </Link>
        <Typography variant="h5" sx={{
          display: { lg: 'block' }, borderLeft: '0.5px solid #fff', pl: 3,
          color: '#fff', fontSize: '16px', ml: 4, '&:hover': {
            color: '#5624d0'
          }
        }}>Web Design for Web Developers: Build Beautiful Websites!
        </Typography></Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', mr: 2, fontSize: '14px' }}><StarIcon />  Leave a rating</Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', mr: 5, fontSize: '14px', }}>   <CircularProgressWithLabel color="primary" sx={{ color: 'white', mr: 1 }} variant="determinate" value={value} /> your progress</Typography>
        <Button sx={{ border: '1px solid #fff', color: '#fff', fontSize: '11px', px: 4, mr: 2, borderRadius: '0' }}>Share <ReplyIcon sx={{ transform: 'rotate(-190deg)' }} /></Button>
      </Box>
    </Box>
  )
}

export default CourseNav