import { Avatar, Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import LanguageIcon from '@mui/icons-material/Language';
const UserSetting = () => {
    const items = ['My Learning', 'My Cart', 'Wishlist', 'Teach on Udemy'];
    const itemsSetting = ['Account Setting', 'Payment Methods', 'WishliUdemy Credits', 'Purchase History'];
    return (
        <>
            <Box sx={{ display: 'flex', borderBottom: '1px solid #999', p: '20px 10px' }}>
                <Avatar alt="AKemy Sharp" src='AK' sx={{ p: 0, background: 'black' }} />
                <Box sx={{ ml: 1 }}>
                    <Typography sx={{
                        fontSize: '16px', fontWeight: '600', '&:hover': {
                            color: '#5624d0'
                        }, cursor: 'pointer'
                    }}>Ashfakul Karim </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#999' }}>ashfakulkarim@staffaisa.org</Typography>
                </Box>
            </Box>
            <Box>
                <Box sx={{ borderBottom: '1px solid #999', px: ' 10px',py:2 }}>

                    {/* <ListItemButton>
                            <ListItemText primary="Trash" />
                        </ListItemButton> */}
                    {
                        items.map((item, index) => (
                            <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} key={index}>{item}</Typography>
                        ))
                    }


                </Box>
            </Box>
            <Box sx={{ borderBottom: '1px solid #999', p: '10px 10px' }}>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1,'&:hover':{   color:'#5624d0'},cursor:'pointer' }} >Notification</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Messages</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #999', p: '10px 10px' }}>

                {/* <ListItemButton>
                            <ListItemText primary="Trash" />
                        </ListItemButton> */}
                {
                    itemsSetting.map((item, index) => (
                        <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} key={index}>{item}</Typography>
                    ))
                }


            </Box>
            <Box sx={{ display:'flex',justifyContent:'space-between', borderBottom: '1px solid #999', p: '20px 10px' }}>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Language</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1,display:'flex' }} >English <LanguageIcon/></Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #999', p: '10px 10px' }}>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Public Profile</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Edit Profile</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #999', p: '10px 10px' }}>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Help </Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Logout </Typography>
            </Box>
            <Box sx={{ p: '10px 10px' }}>
                <Typography sx={{ fontSize: '14px', color: '#333',fontWeight:'bold', ml: 1, mt: 1 ,'&:hover':{   color:'#5624d0'},cursor:'pointer'}} >Udemy Business</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5E6064', ml: 1, mt: 0 }} >Bring Learing to your company</Typography>
            </Box>
        </>
    )
}

export default UserSetting