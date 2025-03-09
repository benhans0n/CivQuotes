import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CivIVQuotes from '../data/civ-iv-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { pageStyles } from '../components/PageStyles';

// markup
const CivIVPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [expandedPanels, setExpandedPanels] = useState({});

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prev => ({
            ...prev,
            [panel]: isExpanded
        }));
    };

    const handleCollapseSection = (section, eraId) => {
        const sectionPanels = {};
        if (section === 'Technologies') {
            sectionPanels[`tech-${eraId}`] = false;
        }
        setExpandedPanels(prev => ({
            ...prev,
            ...sectionPanels
        }));
    };

    const handleCollapseAll = () => {
        const allPanels = {};
        CivIVQuotes.eras.forEach(era => {
            allPanels[`tech-${era.id}`] = false;
        });
        setExpandedPanels(allPanels);
    };

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization IV Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-iv" />
            </Helmet>
            <Navbar />
            <Typography variant="h1" style={pageStyles.pageTitle(isDesktop)}>
                Civilization IV
            </Typography>
            <h2 style={pageStyles.h2(isDesktop)}> Technologies </h2>
            {CivIVQuotes.eras.map((era) => {
                return <Box style={pageStyles.box(isDesktop)} key={era.id}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`tech-${era.id}`] || false}
                        onChange={handleAccordionChange(`tech-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" sx={{ fontSize: '1rem' }}>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivIVQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => {
                                return <Card style={pageStyles.card} key={`tech-${era.id}-${index}`}>
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <br />
                                        <Typography variant="body1" sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br />
                                        <Typography variant="caption" sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button
                                variant="contained"
                                startIcon={<KeyboardArrowUpIcon />}
                                onClick={() => handleCollapseSection('Technologies', era.id)}
                                sx={pageStyles.collapseButton}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}

            <GlobalCollapseButton onCollapseAll={handleCollapseAll} />
        </main>
    )
}

export default CivIVPage