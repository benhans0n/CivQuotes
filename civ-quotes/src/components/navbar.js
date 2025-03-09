import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from './ThemeContext';
import GameMenu from './game-menu';
import { Link } from 'gatsby';

// styles
const toolbarStyle = {
    backgroundColor: "#daa520",
    color: "#111111",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

// markup
const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={toolbarStyle}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            color: '#111111',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: 16
                        }}
                    >
                        Civ Quotes
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="toggle dark mode"
                        onClick={toggleDarkMode}
                        sx={{ color: '#111111', mr: 2 }}
                    >
                        {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>
                    <GameMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;