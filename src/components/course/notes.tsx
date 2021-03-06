import { Box, Button, Menu, MenuItem, TextField, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { CourseInterFace, Module } from "components/types";
import DeleteIcon from '@mui/icons-material/Delete';
import { Editor } from "@tinymce/tinymce-react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModeIcon from '@mui/icons-material/Mode';
interface Props {
    module: Module
    lesson: CourseInterFace | undefined
}
const Notes = ({ module, lesson }: Props) => {
    const [textFieldValue, setTextFieldValue] = React.useState<string>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [text, setText] = useState<string>()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const [btnText, setBtnText] = useState('All lecture')
    const [sortText, setSortText] = useState<string>('Sort by most recent')
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const handleAllLecture = () => {
        setAnchorEl(null);
        setBtnText('All lecture')
    }
    const handleCLecture = () => {
        setAnchorEl(null);
        setBtnText('current lecture')
    }
    const handleMostRecent = () => {
        setSortText('Sort by most recent')
    }
    const handleOldest = () => {
        setSortText('Sort by oldest')
    }
    const handleNotes = () => {
        setText(textFieldValue)
        setIsOpen(false)
        setIsEdit(false)
    }
    const handleOnChange = (content: string, editor: any) => {
        setTextFieldValue(content)
    }
    const handleEdit = () => {
        setIsEdit(true)
    }
    return (
        <Box sx={{ textAlign: '-webkit-center' }}>
            {!isOpen && <Box onClick={() => { setIsOpen(true) }} sx={{
                display: 'flex', width: {
                    xs: '100%', md: '780px'
                }, justifyContent: 'space-between', border: '1px solid #1c1d1f', color: '#6a6f73', p: '10px 1.6rem', cursor: 'pointer'
            }}>
                <Typography sx={{ fontFamily: 'Popins', fontWeight: '700' }}>Create a new Note</Typography>
                <AddIcon sx={{ color: '#fff', background: '#333', borderRadius: '50%' }} />
            </Box>}
            {isOpen && <Box sx={{
                textAlign: 'left', width: {
                    xs: '100%', md: '780px'
                }, mt: 2
            }}>
                <Editor
                    apiKey="j3vn8v923jix8aj3j32kbcvha6yz3204vokkdugr2c5u3gyh"
                    init={{
                        icons: 'thin',
                        placeholder: "Write your Notes...",
                        height: 250,
                        menubar: true,
                        textcolor_rows: '4',
                        toolbar:
                            "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ",
                    }}
                    onEditorChange={handleOnChange}

                />
                <Box sx={{
                    textAlign: 'right', mt: '5px', color: '#333', width: {
                        xs: '100%', md: '780px'
                    }
                }}>
                    <Button sx={{ color: '#333', mr: 1 }} onClick={() => { setIsOpen(false) }}>Cancel</Button>
                    <Button sx={{
                        color: '#fff', background: "black", borderRadius: '0', '&:hover': {
                            color: '#fff', background: "black"
                        }
                    }} onClick={handleNotes}>Save Note</Button>

                </Box>
            </Box>}

            <Box sx={{
                textAlign: 'left', width: {
                    xs: '100%', md: '780px'
                }, mt: 2
            }}>

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: '#333', border: '1px solid #333', borderRadius: '0', fontWeight: "700", textTransform: 'capitalize', fontSize: '16px' }}
                >
                    {btnText} <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{ color: '#5624d0' }}
                >
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#5624d0', background: 'none'
                        }
                    }} onClick={handleAllLecture}>All Lecture</MenuItem>
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#5624d0', background: 'none'
                        }
                    }} onClick={handleCLecture}>Current Lecture</MenuItem>

                </Menu>
                <Button
                    id="basic-button"
                    aria-controls={open2 ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? 'true' : undefined}
                    onClick={handleClick2}
                    sx={{ color: '#333', border: '1px solid #333', borderRadius: '0', fontWeight: "700", textTransform: 'capitalize', fontSize: '16px', ml: 2 }}
                >
                    {sortText} <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{ color: '#5624d0' }}
                >
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#5624d0', background: 'none'
                        }
                    }} onClick={handleMostRecent}>Sort by most recent</MenuItem>
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#5624d0', background: 'none'
                        }
                    }} onClick={handleOldest}>Sort by oldest</MenuItem>

                </Menu>
            </Box>
            {text && <Box sx={{
                textAlign: 'left', width: {
                    xs: '100%', md: '780px'
                }, mt: 2
            }}><>
                    {!isEdit && <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>{lesson?.title}  <Typography sx={{ ml: 1 }}>{module.id}.{module.lessonTitle}</Typography></Typography>

                        <Box>
                            <ModeIcon onClick={handleEdit} sx={{ cursor: 'pointer', mr: 2 }} />
                            <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => setText('')} />
                        </Box>
                    </Box>}
                    {!isEdit && <Box sx={{ background: '#f7f9fa', p: 2, ml: 4, mt: '5px' }} dangerouslySetInnerHTML={{ __html: text }} >


                    </Box>}</>
                <>
                    {isEdit && <Box sx={{
                        textAlign: 'left', width: {
                            xs: '100%', md: '780px'
                        }, mt: 2
                    }}>
                        <Editor
                            apiKey="j3vn8v923jix8aj3j32kbcvha6yz3204vokkdugr2c5u3gyh"
                            init={{
                                icons: 'thin',
                                placeholder: "Write your Notes...",
                                height: 250,
                                menubar: true,
                                textcolor_rows: '4',
                                toolbar:
                                    "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ",
                            }}
                            onEditorChange={handleOnChange}

                        />
                        <Box sx={{
                            textAlign: 'right', mt: '5px', color: '#333', width: {
                                xs: '100%', md: '780px'
                            }
                        }}>
                            <Button sx={{ color: '#333', mr: 1 }} onClick={() => { setIsOpen(false); setIsEdit(false) }}>Cancel</Button>
                            <Button sx={{
                                color: '#fff', background: "black", borderRadius: '0', '&:hover': {
                                    color: '#fff', background: "black"
                                }
                            }} onClick={handleNotes}>Save Note</Button>

                        </Box>
                    </Box>}
                </>

            </Box>}
        </Box>
    )
}

export default Notes
// width='100%'
// height='600px' style={{ width: '100%' }}