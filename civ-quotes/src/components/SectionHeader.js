import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { pageStyles } from './PageStyles';

const SectionHeader = ({ children }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <Typography 
            variant="h2" 
            component="h2" 
            sx={pageStyles.h2(isDesktop)}
        >
            {children}
        </Typography>
    );
};

export default SectionHeader; 