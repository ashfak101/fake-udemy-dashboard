import { IconButton, Tooltip } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import React from 'react'

const Icons = () => {
    return (
        <>
            <Tooltip 
             title="Settings" placement="top" componentsProps={{
                tooltip: {
                  sx: {
                    color: "#fff",
                    backgroundColor: " #3b3b3b",
                    fontSize: "12px",
                    borderRadius:'0',
                    p:'12px 12px'
                  }
                }
              }}>
                <IconButton sx={{ '&:hover': { background: 'none' }, color: '#333' }}>
                    <SettingsIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Fullscreen" placement="top" componentsProps={{
                tooltip: {
                  sx: {
                    color: "#fff",
                    backgroundColor: " #3b3b3b",
                    fontSize: "12px",
                    borderRadius:'0',
                    p:'12px 12px'
                  }
                }
              }}>
                <IconButton sx={{ '&:hover': { background: 'none' }, ml: {xs:0,md:1}, color: '#333' }}>
                    <OpenInFullIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Expanded View" placement="top" componentsProps={{
                tooltip: {
                  sx: {
                    color: "#fff",
                    backgroundColor: " #3b3b3b",
                    fontSize: "12px",
                    borderRadius:'0',
                    p:'12px 12px'
                  }
                }
              }}>
                <IconButton sx={{ '&:hover': { background: 'none' }, ml: {xs:0,md:1}, color: '#333' }}>
                    <SyncAltIcon />
                </IconButton>
            </Tooltip>

        </>
    )
}

export default Icons