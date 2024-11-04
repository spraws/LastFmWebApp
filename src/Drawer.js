import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: 'var(--background-color)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{ width: '100%' }}>
        {['About'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center', 
            }}>
              <ListItemText primary={text} sx={{ 
                textAlign: 'center', className:"list-item-text",
                
              }}
               />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ width: '100%' }}>
        {['Other Projects'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center', 
            }}>
              <ListItemText primary={text} sx={{ 
                textAlign: 'center', className:"list-item-text"
              }}
               />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ width: '100%', position: 'Absolute',
        bottom: '0'
       }}>
        {['Github Repo'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center', 
            }}>
              <ListItemText className='menu-text' primary={text} sx={{ 
                textAlign: 'center', className:"list-item-text"
              }}
              
               />
                <GitHubIcon className="github-ico" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div className="menu">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="menu-ico" />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}