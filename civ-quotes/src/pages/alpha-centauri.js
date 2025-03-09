import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AlphaCentauriQuotes from '../data/ac-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { pageStyles } from '../components/PageStyles';

// styles
const accordionStyles = {
    box: isDesktop => ({
        width: isDesktop ? 60 + "%" : 100 + "%",
        marginLeft: isDesktop ? 20 + "%" : 0 + "%",
        marginTop: 1 + "%"
    }),
    accordion: {
        backgroundColor: "#cccccc"
    },
    card: {
        marginBottom: 1 + "%"
    },
    collapseButton: {
        marginTop: '10px',
        marginBottom: '20px'
    },
    collapseAllButton: isDesktop => ({
        marginLeft: isDesktop ? 20 + "%" : 1 + "%",
        marginTop: '20px',
        marginBottom: '20px'
    })
}

// markup
const AlphaCentauriPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [expandedPanels, setExpandedPanels] = useState({});

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prev => ({
            ...prev,
            [panel]: isExpanded
        }));
    };

    const handleCollapseSection = (section, factionId) => {
        const sectionPanels = {};
        if (section === 'Factions') {
            sectionPanels[`faction-${factionId}`] = false;
        }
        setExpandedPanels(prev => ({
            ...prev,
            ...sectionPanels
        }));
    };

    const handleCollapseAll = () => {
        const allPanels = {};
        AlphaCentauriQuotes.factions.forEach(faction => {
            allPanels[`faction-${faction.id}`] = false;
        });
        setExpandedPanels(allPanels);
    };

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sid Meier's Alpha Centauri Quotes</title>
                <link rel="canonical" href="http://civquotes.com/alpha-centauri" />
            </Helmet>
            <Navbar />
            <Typography variant="h1" style={pageStyles.pageTitle(isDesktop)}>
                Sid Meier's Alpha Centauri
            </Typography>
            {AlphaCentauriQuotes.factions.map((faction, i) => {
                return <Box style={pageStyles.box(isDesktop)} key={faction.id}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`faction-${faction.id}`] || false}
                        onChange={handleAccordionChange(`faction-${faction.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{faction.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {AlphaCentauriQuotes.quotes.filter(quote => quote.faction === faction.id).map((quote, j) => {
                                return <Card style={pageStyles.card} key={`faction-${faction.id}-${j}`}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>, <i>{quote.work}</i> {quote.flavor_text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Factions', faction.id)}
                                startIcon={<KeyboardArrowUpIcon />}
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

export default AlphaCentauriPage