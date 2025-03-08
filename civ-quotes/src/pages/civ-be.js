import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CivBETechQuotes from '../data/civ-be-tech-quotes.json'
import CivBEAffinityQuotes from '../data/civ-be-affinities-quotes.json'
import CivBEWonderQuotes from '../data/civ-be-wonder-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { pageStyles } from '../components/PageStyles';

const CivBEPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [expandedPanels, setExpandedPanels] = useState({});

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prev => ({
            ...prev,
            [panel]: isExpanded
        }));
    };

    const handleCollapseSection = (section) => {
        const sectionPanels = {};
        if (section === 'Technologies') {
            CivBETechQuotes.factions.forEach(faction => {
                sectionPanels[`tech-${faction.id}`] = false;
            });
        } else if (section === 'Affinities') {
            CivBEAffinityQuotes.affinities.forEach(affinity => {
                sectionPanels[`affinity-${affinity.id}`] = false;
            });
        } else if (section === 'Wonders') {
            sectionPanels['wonders'] = false;
        }
        setExpandedPanels(prev => ({
            ...prev,
            ...sectionPanels
        }));
    };

    const handleCollapseAll = () => {
        const allPanels = {};
        CivBETechQuotes.factions.forEach(faction => {
            allPanels[`tech-${faction.id}`] = false;
        });
        CivBEAffinityQuotes.affinities.forEach(affinity => {
            allPanels[`affinity-${affinity.id}`] = false;
        });
        allPanels['wonders'] = false;
        setExpandedPanels(allPanels);
    };

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization: Beyond Earth Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-be" />
            </Helmet>
            <Navbar />
            <Typography variant="h1" style={pageStyles.pageTitle(isDesktop)}>
                Civilization: Beyond Earth
            </Typography>
            <h2 style={pageStyles.h2(isDesktop)}> Technologies </h2>
            {CivBETechQuotes.factions.map((faction) => {
                return <Box style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`tech-${faction.id}`] || false}
                        onChange={handleAccordionChange(`tech-${faction.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{faction.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivBETechQuotes.quotes.filter(quote => quote.faction === faction.id).map((quote) => {
                                return <Card style={pageStyles.card}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>{quote.work !== "" ? ", " : ""}<i>{quote.work !== "" ? quote.work : ""}</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Technologies')}
                                startIcon={<KeyboardArrowUpIcon />}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}

            <h2 style={pageStyles.h2(isDesktop)}> Affinities </h2>
            {CivBEAffinityQuotes.affinities.map((affinity) => {
                return <Box style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`affinity-${affinity.id}`] || false}
                        onChange={handleAccordionChange(`affinity-${affinity.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>{affinity.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivBEAffinityQuotes.quotes.filter(quote => quote.affinity === affinity.id).map((quote) => {
                                return <Card style={pageStyles.card}>
                                    <CardContent>
                                        <Typography>
                                            <b>Level {quote.level}</b>
                                        </Typography>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>{quote.work !== "" ? ", " : ""}<i>{quote.work !== "" ? quote.work : ""}</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Affinities')}
                                startIcon={<KeyboardArrowUpIcon />}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}

            <h2 style={pageStyles.h2(isDesktop)}> Wonders </h2>
            <Box style={pageStyles.box(isDesktop)}>
                <Accordion 
                    style={pageStyles.accordion}
                    expanded={expandedPanels['wonders'] || false}
                    onChange={handleAccordionChange('wonders')}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Wonders</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {CivBEWonderQuotes.quotes.map((quote) => {
                            return <Card style={pageStyles.card}>
                                <CardContent>
                                    <Typography>
                                        <b>{quote.wonder}</b>
                                    </Typography>
                                    <br></br>
                                    <Typography sx={{ fontSize: 16 }}>
                                        <i style={{whiteSpace: "pre-line"}}>
                                            {quote.quote}
                                        </i>
                                    </Typography>
                                    <br></br>
                                    <Typography sx={{ fontSize: 12 }}>
                                        <b>— {quote.speaker}</b>{quote.work !== "" ? ", " : ""}<i>{quote.work !== "" ? quote.work : ""}</i>
                                    </Typography>
                                </CardContent>
                            </Card>
                        })}
                        <Button 
                            variant="contained" 
                            sx={pageStyles.collapseButton}
                            onClick={() => handleCollapseSection('Wonders')}
                            startIcon={<KeyboardArrowUpIcon />}
                        >
                            Collapse
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <GlobalCollapseButton onCollapseAll={handleCollapseAll} />
        </main>
    )
}

export default CivBEPage