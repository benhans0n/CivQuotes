import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CivVTechQuotes from '../data/civ-v-tech-quotes.json'
import CivVWonderQuotes from '../data/civ-v-wonder-quotes.json'
import CivVEraQuotes from '../data/civ-v-era-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { pageStyles } from '../components/PageStyles';

// markup
const CivVPage = () => {
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
        } else if (section === 'Wonders') {
            sectionPanels[`wonder-${eraId}`] = false;
        } else if (section === 'Eras') {
            sectionPanels[`era-${eraId}`] = false;
        }
        setExpandedPanels(prev => ({
            ...prev,
            ...sectionPanels
        }));
    };

    const handleCollapseAll = () => {
        const allPanels = {};
        CivVTechQuotes.eras.forEach(era => {
            allPanels[`tech-${era.id}`] = false;
        });
        CivVWonderQuotes.eras.forEach(era => {
            allPanels[`wonder-${era.id}`] = false;
        });
        CivVEraQuotes.eras.forEach(era => {
            allPanels[`era-${era.id}`] = false;
        });
        setExpandedPanels(allPanels);
    };

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization V Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-v" />
            </Helmet>
            <Navbar />
            <Typography variant="h1" style={pageStyles.pageTitle(isDesktop)}>
                Civilization V
            </Typography>
            <h2 style={pageStyles.h2(isDesktop)}> Technologies </h2>
            {CivVTechQuotes.eras.map((era) => {
                return <Box style={pageStyles.box(isDesktop)} key={era.id}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`tech-${era.id}`] || false}
                        onChange={handleAccordionChange(`tech-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVTechQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => {
                                return <Card style={pageStyles.card} key={`tech-${era.id}-${index}`}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
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

            <h2 style={pageStyles.h2(isDesktop)}> Wonders </h2>
            {CivVWonderQuotes.eras.map((era) => {
                return <Box style={pageStyles.box(isDesktop)} key={era.id}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`wonder-${era.id}`] || false}
                        onChange={handleAccordionChange(`wonder-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVWonderQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => {
                                return <Card style={pageStyles.card} key={`wonder-${era.id}-${index}`}>
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
                                            <b>— {quote.speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button
                                variant="contained"
                                startIcon={<KeyboardArrowUpIcon />}
                                onClick={() => handleCollapseSection('Wonders', era.id)}
                                sx={pageStyles.collapseButton}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}

            <h2 style={pageStyles.h2(isDesktop)}> Eras </h2>
            {CivVEraQuotes.eras.map((era) => {
                return <Box style={pageStyles.box(isDesktop)} key={era.id}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`era-${era.id}`] || false}
                        onChange={handleAccordionChange(`era-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVEraQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => {
                                return <Card style={pageStyles.card} key={`era-${era.id}-${index}`}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button
                                variant="contained"
                                startIcon={<KeyboardArrowUpIcon />}
                                onClick={() => handleCollapseSection('Eras', era.id)}
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

export default CivVPage