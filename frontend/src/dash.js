import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import img from './logo.jpg'





export const  Dash = () =>{

return(
  <div>
<AppBar position="fixed" style={{backgroundColor: '#1e2772'}}>
<Toolbar variant="dense">
  <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    <MenuIcon />
  </IconButton>
  <img
          src={img}
          alt="img"
         fullWidth
         height="75"
      
        />
</Toolbar>
</AppBar>
</div>
)

}
