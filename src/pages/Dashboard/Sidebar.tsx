import { useLocation, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { logoutService } from '../../services/authentication/logoutService';

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const drawerWidth = 220;

  const handleLogout = async () => {
    const response = await logoutService();
    if (response.success) {
      navigate('/login');
    }
    console.log(response);
  };

  return (
    <Box
      sx={{ display: 'flex' }}
      component="section"
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          height: 96,
          backgroundColor: 'white',
          boxShadow: 'black',
        }}
      >
        <Toolbar sx={{ height: '100%' }}>
          <p className="select-none font-bold text-4xl flex-nowrap">
            {location.pathname}
          </p>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(202, 166, 125)',
            color: 'white',
          },
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div
          onClick={() => navigate('/')}
          className="flex flex-col justify-center items-center h-24 text-2xl tracking-wider text-white bg-[#caa67d] cursor-pointer"
        >
          <span style={{ fontFamily: 'Quicksand-Bold' }}>Bamboo</span>
          <span style={{ fontFamily: 'Quicksand-Bold' }}>Dentique</span>
        </div>
        <Divider />
        <List>
          {['HOME', 'ACCOUNT', 'CALCULATOR'].map((text, index) => {
            const routeName = text.toLowerCase();
            return (
              <ListItem
                key={text}
                disablePadding
              >
                <ListItemButton onClick={() => navigate(routeName)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <AccountBoxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider sx={{ marginBottom: 'auto' }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="LOGOUT" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', px: 3 }}
      >
        <Toolbar sx={{ height: '8rem' }} />
        {children}
      </Box>
    </Box>
  );
}
