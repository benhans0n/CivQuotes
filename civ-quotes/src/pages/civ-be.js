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
import { useTheme } from '../components/ThemeContext';

const CivBEPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const { isDarkMode } = useTheme();
    const [expandedPanels, setExpandedPanels] = useState({});

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prev => ({
            ...prev,
            [panel]: isExpanded
        }));
    };

    const handleCollapseSection = (section, id) => {
        const sectionPanels = {};
        if (section === 'Technologies') {
            sectionPanels[`tech-${id}`] = false;
        } else if (section === 'Affinities') {
            sectionPanels[`affinity-${id}`] = false;
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
            <Typography variant="h1" sx={pageStyles.pageTitle(isDesktop)}>
                Civilization: Beyond Earth
            </Typography>
            <h2 style={pageStyles.h2(isDesktop)}> Technologies </h2>
            {CivBETechQuotes.factions.map((faction) => {
                return <Box sx={pageStyles.box(isDesktop)} key={faction.id}>
                    <Accordion 
                        sx={pageStyles.accordion(isDarkMode)}
                        expanded={expandedPanels[`tech-${faction.id}`] || false}
                        onChange={handleAccordionChange(`tech-${faction.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" sx={{ fontSize: '1rem' }}>{faction.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivBETechQuotes.quotes.filter(quote => quote.faction === faction.id).map((quote, index) => {
                                return <Card sx={pageStyles.card(isDarkMode)} key={`tech-${faction.id}-${index}`}>
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br />
                                        <Typography variant="caption" sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>{quote.work !== "" ? ", " : ""}<i>{quote.work !== "" ? quote.work : ""}</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Technologies', faction.id)}
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
                return <Box sx={pageStyles.box(isDesktop)} key={affinity.id}>
                    <Accordion 
                        sx={pageStyles.accordion(isDarkMode)}
                        expanded={expandedPanels[`affinity-${affinity.id}`] || false}
                        onChange={handleAccordionChange(`affinity-${affinity.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" sx={{ fontSize: '1rem' }}>{affinity.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivBEAffinityQuotes.quotes.filter(quote => quote.affinity === affinity.id).map((quote, index) => {
                                return <Card sx={pageStyles.card(isDarkMode)} key={`affinity-${affinity.id}-${index}`}>
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            <b>Level {quote.level}</b>
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br />
                                        <Typography variant="caption" sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>{quote.work !== "" ? ", " : ""}<i>{quote.work !== "" ? quote.work : ""}</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Affinities', affinity.id)}
                                startIcon={<KeyboardArrowUpIcon />}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}

            <h2 style={pageStyles.h2(isDesktop)}> Wonders </h2>
            <Box sx={pageStyles.box(isDesktop)}>
                <Accordion 
                    sx={pageStyles.accordion(isDarkMode)}
                    expanded={expandedPanels['wonders'] || false}
                    onChange={handleAccordionChange('wonders')}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" sx={{ fontSize: '1rem' }}>Wonders</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {CivBEWonderQuotes.quotes.map((quote, index) => {
                            return <Card sx={pageStyles.card(isDarkMode)} key={`wonder-${index}`}>
                                <CardContent>
                                    <Typography variant="subtitle1">
                                        <b>{quote.wonder}</b>
                                    </Typography>
                                    <br />
                                    <Typography variant="body1" sx={{ fontSize: 16 }}>
                                        <i style={{whiteSpace: "pre-line"}}>
                                            {quote.quote}
                                        </i>
                                    </Typography>
                                    <br />
                                    <Typography variant="caption" sx={{ fontSize: 12 }}>
                                        <b>— {quote.speaker}</b>{quote.work !== "" ? ", " : ""}<i>{quote.work !== "" ? quote.work : ""}</i>
                                    </Typography>
                                </CardContent>
                            </Card>
                        })}
                        <Button 
                            variant="contained" 
                            sx={pageStyles.collapseButton}
                            onClick={() => handleCollapseSection('Wonders', null)}
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