import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GameMenu from './game-menu';


// styles
const toolbarStyle = {
    backgroundColor: "#daa520",
    color: "#111111",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

// markup
export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={toolbarStyle}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <b>Civ Quotes</b>
                    </Typography>
                    <GameMenu sx={{zIndex: 0}}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}