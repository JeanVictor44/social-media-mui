import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]: {
    display:"flex"
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]: {
    display:"none"
  }
}))

export const Navbar = () => {
  const [open, setOpen ] = useState(false)

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"}}}>
                Jean Dev
            </Typography>
            <CodeIcon sx={{ display: {xs: "block", sm: "none"}}}/>
            <Search>
              <InputBase placeholder='search...' />
            </Search>
            <Icons>
            <Badge badgeContent={4} color="error">
              <Mail   />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications  />
            </Badge>
            <Avatar 
              sx={{width:30,height:30 }}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              onClick={() => setOpen(true)} 
            />
            </Icons>
            <UserBox onClick={() => setOpen(true)} >
              <Avatar sx={{width:30,height:30 }}src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Typography variant="caption">Jean </Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false) }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
