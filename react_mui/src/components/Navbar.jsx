import { 
  AppBar,
  Toolbar, 
  Typography, 
  styled, 
  Box, 
  InputBase, 
  Badge, 
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  Divider,
  ListItemIcon,
  Switch,
  FormControlLabel} from '@mui/material';  
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';


const Navbar = ({mode, setMode}) => {
    /* Hooks */
    const[open, setOpen] = useState(false);
    const[themeMode, setThemeMode] = useState(false);


    /* Style App */
    const ToolbarStyled = styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between',
    })

    const Search = styled('div')(({theme})=>({
      backgroundColor: "white",
      color:"black",
      padding: '0 10px',
      borderRadius: theme.shape.borderRadius,
      width: "40%"
    }));

    const Icons = styled(Box)(({theme})=>({
       display: 'none',
       alignItems: 'center',
       gap:"20px",
       [theme.breakpoints.up("sm")]:{
        display:"flex"
      }
    }));

    const UserBox = styled(Box)(({theme})=>({
      display: 'flex',
      alignItems: 'center',
      gap:"5px",
      [theme.breakpoints.up("sm")]:{
        display:"none"
      }
   }));

   const Mode = styled(Box)(({theme})=>({
    display: 'none',
    alignItems: 'center',
    gap:"1px",
    [theme.breakpoints.down("md")]:{
      display:"flex"
    }
 }));

    const Logo = styled(Typography)({
      fontWeight: 500,
      alignItems:"center",
      display:"flex",
      gap:"5px"
    })

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',
          '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          },
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          },
        },
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
      },
    }));


  return (
    <AppBar position='sticky'>
        <ToolbarStyled>
              <Logo>
                <TwitterIcon />
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Twitter</Typography>
              </Logo>
              <Search >
                  <InputBase placeholder='Search...'/>
              </Search>
              <Icons>
                  <Badge badgeContent={5} color="error">
                    <MailIcon/>
                  </Badge>
                  <Badge badgeContent={45} color="error">
                    <NotificationsIcon/>
                  </Badge>
                  <Box>
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={()=>{setOpen(true)}}
                          size="small"
                          aria-controls={open ? 'account-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                        >
                          <Avatar alt="Shihab Raafat" 
                          src="https://cdn.dribbble.com/users/5949503/avatars/normal/c6fc23741d552d9d9f2e18a3b8c7a40b.jpeg?1621013567"
                          sx={{width:40, height:40}}/>
                        </IconButton>
                      </Tooltip>
                  </Box>
              </Icons>
              <UserBox>
                   <Mode>
                        <FormControlLabel
                              control={<MaterialUISwitch/>}
                              onClick={()=>{setMode(mode == "light" ? "dark" : "light");setThemeMode(mode=="light"?true:false)}}
                              checked={themeMode}
                           />
                   </Mode>
                  <UserBox onClick={()=>setOpen(true)}>
                      <Avatar alt="Shihab Raafat" 
                              src="https://cdn.dribbble.com/users/5949503/avatars/normal/c6fc23741d552d9d9f2e18a3b8c7a40b.jpeg?1621013567"
                              sx={{width:40, height:40}}/>
                        <Typography>Shihab</Typography>
                  </UserBox>
              </UserBox>
        </ToolbarStyled>
        <Menu
        id="account-menu"
        open={open}
        onClose={()=>{setOpen(false)}}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 6,
            ml:-3.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem>
          <Avatar alt="shihab raafat"
                  src="https://cdn.dribbble.com/users/5949503/avatars/normal/c6fc23741d552d9d9f2e18a3b8c7a40b.jpeg?1621013567" /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar alt="shihab raafat"
                  src="https://images.unsplash.com/photo-1667064189690-2e8d2f28cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar