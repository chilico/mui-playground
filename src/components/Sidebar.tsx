import { Drawer, IconButton, Stack, Theme, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useSettings } from '../hooks';

const drawerWidth = 550;

const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      transition: (theme: Theme) =>
        theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      border: 'none',
      borderRadius: '20px 0 0 20px',
      overflowX: 'hidden',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
  },
  drawerInnerContainer: {
    justifyContent: 'start',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    p: 2,
  },
  closeBtn: {
    position: 'absolute',
    top: 5,
    left: 5,
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    fontSize: (theme: Theme) => theme.typography.pxToRem(26),
    mt: 1,
    mb: 2,
    width: '100%',
    textAlign: 'center',
  },
  contentContainer: {
    width: '100%',
    hight: '100%',
  },
};

export const Sidebar = () => {
  const {
    state: { sidebarOpen },
    closeSidebar,
  } = useSettings();

  return (
    <Drawer
      sx={styles.drawer}
      open={sidebarOpen}
      onClose={closeSidebar}
      variant='temporary'
      anchor='right'
    >
      <Stack sx={styles.drawerInnerContainer}>
        <IconButton onClick={closeSidebar} sx={styles.closeBtn}>
          <CloseIcon />
        </IconButton>
        <Typography sx={styles.title}>Sidebar Title</Typography>
        <Stack spacing={1} sx={styles.contentContainer}>
          {/*
            content of the sidebar
            could be static and coded in here,
            or could be formed of panels switched in and out
            following similar pattern to view state in home
          */}
        </Stack>
      </Stack>
    </Drawer>
  );
};
