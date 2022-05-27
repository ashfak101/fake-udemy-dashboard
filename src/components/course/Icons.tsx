import { IconButton, Tooltip } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import React from 'react'

const Icons = () => {
    return (
        <>
            <Tooltip title="Settings" placement="top">
                <IconButton sx={{ '&:hover': { background: 'none' }, color: '#333' }}>
                    <SettingsIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Fullscreen" placement="top">
                <IconButton sx={{ '&:hover': { background: 'none' }, ml: {xs:0,md:1}, color: '#333' }}>
                    <OpenInFullIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Expanded View" placement="top">
                <IconButton sx={{ '&:hover': { background: 'none' }, ml: {xs:0,md:1}, color: '#333' }}>
                    <SyncAltIcon />
                </IconButton>
            </Tooltip>

        </>
    )
}

export default Icons