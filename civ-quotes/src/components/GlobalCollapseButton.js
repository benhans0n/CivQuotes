import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMediaQuery } from '@mui/material';
import { pageStyles } from './PageStyles';

const GlobalCollapseButton = ({ onCollapseAll }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <Button 
            variant="contained"
            sx={pageStyles.globalCollapseButton(isDesktop)}
            onClick={onCollapseAll}
            startIcon={<KeyboardArrowUpIcon />}
        >
            Collapse All
        </Button>
    );
};

export default GlobalCollapseButton; 