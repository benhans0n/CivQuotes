import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { navigate } from "gatsby"

export default function GameMenu() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleRedirect = (event) => {
        handleClose(event)
        navigate(event.target.id)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <IconButton
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MenuIcon />
            </IconButton>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                role={undefined}
                placement="top-end"
                transition
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                {horizontal: 'right', vertical: 'top'}
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem id="/" onClick={handleRedirect}>Home</MenuItem>
                                    <MenuItem id="/alpha-centauri" onClick={handleRedirect}>Sid Meier's Alpha Centauri</MenuItem>
                                    <MenuItem id="/civ-iv" onClick={handleRedirect}>Sid Meier's Civilization IV</MenuItem>
                                    <MenuItem id="/civ-v" onClick={handleRedirect}>Sid Meier's Civilization V</MenuItem>
                                    <MenuItem id="/civ-be" onClick={handleRedirect}>Sid Meier's Civilization: Beyond Earth</MenuItem>
                                    <MenuItem id="/civ-vi" onClick={handleRedirect}>Sid Meier's Civilization VI</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}