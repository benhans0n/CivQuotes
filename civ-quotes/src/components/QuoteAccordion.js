import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { pageStyles } from './PageStyles';

const QuoteAccordion = ({
    id,
    title,
    isExpanded,
    onAccordionChange,
    onCollapse,
    isDarkMode,
    collapseButtonText = "Collapse",
    children
}) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <Box sx={pageStyles.box(isDesktop)}>
            <Accordion 
                sx={pageStyles.accordion(isDarkMode)}
                expanded={isExpanded}
                onChange={onAccordionChange}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                    <Button
                        variant="contained"
                        startIcon={<KeyboardArrowUpIcon />}
                        onClick={onCollapse}
                        sx={pageStyles.collapseButton}
                    >
                        {collapseButtonText}
                    </Button>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

// Export memoized version for performance
export default React.memo(QuoteAccordion, (prevProps, nextProps) => {
    return (
        prevProps.id === nextProps.id &&
        prevProps.title === nextProps.title &&
        prevProps.isExpanded === nextProps.isExpanded &&
        prevProps.isDarkMode === nextProps.isDarkMode &&
        prevProps.collapseButtonText === nextProps.collapseButtonText
        // Note: we don't compare children or callbacks as they may change frequently
    );
}); 