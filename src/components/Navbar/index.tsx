import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
export const Navbar = () => {
  return (
    <AppBar position="static">
        <StyledToolbar>
            <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"}}}>
                Jean Dev
            </Typography>
            <CodeIcon sx={{ display: {xs: "block", sm: "none"}}}/>
        </StyledToolbar>
    </AppBar>
  )
}
