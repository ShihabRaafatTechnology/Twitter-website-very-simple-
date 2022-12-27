import { Box, Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, ButtonGroup, Button, Stack, createTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';


const Add = () => {
    const[open, setOpen] = useState(false);

    const StyledModel = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        alignItems:"center",
        gap: "10px",
        marginBottom: "20px"
    })
  return (
    <>
        <Tooltip title="Add" sx={{
            position: "fixed",
            bottom: 20,
            left: {xs: "calc(50% - 25px)", md: 30}}}
            onClick={e=>setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModel
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="center" mb={2}>
                        Create post
                </Typography>
                <UserBox>
                    <Avatar
                        src="https://cdn.dribbble.com/users/5949503/avatars/normal/c6fc23741d552d9d9f2e18a3b8c7a40b.jpeg?1621013567"
                        alt="avatar"
                        sx={{width:30, height:30}}/>
                        <Typography fontWeight={500} variant="span">
                            Shihab Raafat
                        </Typography>
                </UserBox>
                <TextField
                sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color="primary"/>
                    <InsertPhotoIcon color="secondary"/>
                    <VideoCameraBackIcon color="success"/>
                    <PersonAddIcon color="error"/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                </ButtonGroup>
            </Box>
        </StyledModel>
    </>
  )
}

export default Add