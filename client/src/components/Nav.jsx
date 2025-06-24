import PlayerSearchBox from '@/components/PlayerSearchBox';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router';

const drawerWidth = 320;

/**
 * @typedef NavProps
 * @property {string} [appTitle] - The title of the application.
 * @property {Array<{to: string, label: string}>} [navLinks] - Navigation links.
 */

/**
 * The main navigation component for the application.
 * @param {NavProps} props - The properties for the Nav component.
 */
export default function Nav({ appTitle = 'Tennis Parser', navLinks = [] }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Stack sx={{ textAlign: 'center' }} spacing={1.5}>
            <Box padding={1} paddingBlockStart={2}>
                <Typography variant="h6">
                    {appTitle}
                </Typography>
            </Box>
            <Divider />
            <Box paddingInline={1.5}><Stack spacing={1}>
                <PlayerSearchBox onChange={handleDrawerToggle} />
                <List>
                    {navLinks.map(({ to, label }) => (
                        <ListItem key={label} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }} to={to}>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Stack></Box>
        </Stack >
    );

    return (
        <><AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >{appTitle}</Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="Open navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {appTitle}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navLinks.map(({ to, label }) => (
                            <NavLink to={to}
                                key={label}
                                style={{ textDecoration: 'none', color: 'inherit', margin: '0 0.75rem' }}
                            ><Button onClick={handleDrawerToggle} >
                                    {label}
                                </Button></NavLink>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                        <PlayerSearchBox />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
            <nav>
                <Drawer
                    container={document.body}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}