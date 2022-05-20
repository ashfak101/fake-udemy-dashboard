import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Drawer, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { fontSize } from '@mui/system';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import UserSetting from './UserSetting';
import MobileNav from './MobileNav';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [navState, setNavState] = React.useState<boolean>(false);
    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const navs = [{ name: 'Udemy Business' }, { name: 'Teach on Udemy' }, { name: 'My Learning' }];
    return (
        <>
            <AppBar sx={{ bgcolor: "#fff", boxShadow: 'none' }} position="static">

                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: {xs:'space-between',lg:'"flex-start"'},
                        height: "70px",pr:{xs:'66px',}
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: "flex", alignItems: "center" }}
                    >

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h3" sx={{display:{xs:'none',md:'block',lg:'block'}, color: '#333', fontSize: '35px', fontWeight: '600', fontFamily: 'Roboto sans-serif', letterSpacing: '1px' }}>udemy<Box sx={{ display: 'inline', position: 'absolute', left: '24px', top: '11px', fontWeight: 'bold', color: '#a435f0' }}>^</Box></Typography>
                            <Typography variant="h5" sx={{display:{xs:'none',lg:'block'},
                                color: '#767778', fontSize: '14px', ml: 3, '&:hover': {
                                    color: '#5624d0'
                                }
                            }}>Categoris</Typography>
                        </Box>
                        <Paper
                            component="form"
                            sx={{
                                p: "5px 5px",
                                display:{
                                    xs:'none',
                                    md: "flex"
                                },
                                alignItems: "center",
                                width: {md:'500px',lg:'800px',},
                                bgcolor: "#fff",

                                border: "1px solid #333",
                                borderRadius: "50px",
                                ml: { md: 2, xs: 2 },
                                boxShadow: 'none'
                            }}
                        >
                            <IconButton
                                type="submit"
                                sx={{ p: "5px", color: "#999" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, color: "black", fontSize: '14px' }}
                                placeholder="Search for anything"
                                inputProps={{ "aria-label": "search google maps" }}
                            />

                        </Paper>
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                lg: "block",
                            },

                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            {navs.map((nav) => (
                                <Typography key={nav.name}

                                    sx={{
                                        fontSize: '14px',
                                        margin: '0px 10px',
                                        fontWeight: "400",
                                        color: "#767778",
                                        '&:hover': {
                                            color: '#5624d0'
                                        }, cursor: 'pointer'

                                    }}

                                >
                                    {nav.name}

                                </Typography>
                            ))}
                            <FavoriteBorderIcon sx={{
                                color: "#333", mr: 3, '&:hover': {
                                    color: '#5624d0'
                                }, cursor: 'pointer'
                            }} />
                            <ShoppingCartIcon sx={{
                                color: "#333", mr: 3, '&:hover': { color: '#5624d0' }, cursor: 'pointer'
                            }} />
                            <NotificationsNoneIcon sx={{
                                color: "#333", mr: 3, '&:hover': {
                                    color: '#5624d0'
                                }, cursor: 'pointer'
                            }} />
                            <Box sx={{ flexGrow: 0, boxShadow: 'none' }}>
                                <Tooltip title="Open settings" sx={{ background: '#999' }}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, background: '#999' }}>
                                        <Avatar alt="AKemy Sharp" src='AK' sx={{ p: 0, background: 'black' }} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px', }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >


                                    <UserSetting />



                                </Menu>
                            </Box >

                        </Box>


                    </Box>
                    
                    <Typography variant="h3" sx={{display:{xs:'block',md:'none',lg:'none'}, color: '#333', fontSize: '35px', fontWeight: '600', fontFamily: 'Roboto sans-serif', letterSpacing: '1px' }}>udemy<Box sx={{ display: 'inline', position: 'absolute', left: '42px', top: '13px', fontWeight: 'bold', color: '#a435f0' }}>^</Box></Typography>
                    <Box sx={{display:{xs:'flex',lg:'none'},alignItems:'center'}}>
                    <IconButton
                                type="submit"
                                sx={{  color: "#333" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                            <ShoppingCartIcon sx={{
                                color: "#333", ml: 2, '&:hover': { color: '#5624d0' }, cursor: 'pointer'
                            }} />
                    </Box>
                    <Button
                        sx={{ display: { xs: "block", lg: "none", } }}
                        onClick={() => setNavState(true)}
                    >
                        <MenuIcon sx={{ color: "#333" }} />
                    </Button>
                    <Drawer sx={{zIndex:'0'}} anchor="left" open={navState} onClose={() => setNavState(false)}>
                        <MobileNav/>
                    </Drawer>
                </Toolbar>

            </AppBar>
        </>
    );
};
export default Navbar;
