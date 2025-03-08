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
    const [expandedTechs, setExpandedTechs] = useState({});
    const [expandedWonders, setExpandedWonders] = useState({});
    const [expandedEras, setExpandedEras] = useState({});

    const handleTechChange = (eraId) => (event, isExpanded) => {
        setExpandedTechs(prev => ({ ...prev, [eraId]: isExpanded }));
    };

    const handleWonderChange = (eraId) => (event, isExpanded) => {
        setExpandedWonders(prev => ({ ...prev, [eraId]: isExpanded }));
    };

    const handleEraChange = (eraId) => (event, isExpanded) => {
        setExpandedEras(prev => ({ ...prev, [eraId]: isExpanded }));
    };

    const collapseTechs = () => {
        const newState = {};
        CivVTechQuotes.eras.forEach(era => {
            newState[era.id] = false;
        });
        setExpandedTechs(newState);
    };

    const collapseWonders = () => {
        const newState = {};
        CivVWonderQuotes.eras.forEach(era => {
            newState[era.id] = false;
        });
        setExpandedWonders(newState);
    };

    const collapseEras = () => {
        const newState = {};
        CivVEraQuotes.eras.forEach(era => {
            newState[era.id] = false;
        });
        setExpandedEras(newState);
    };

    const collapseAll = () => {
        collapseTechs();
        collapseWonders();
        collapseEras();
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
                return <Box style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedTechs[era.id]}
                        onChange={handleTechChange(era.id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVTechQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={pageStyles.card}>
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
                                onClick={collapseTechs}
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
                return <Box style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedWonders[era.id]}
                        onChange={handleWonderChange(era.id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVWonderQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
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
                                            <b>— {quote.speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                            <Button
                                variant="contained"
                                startIcon={<KeyboardArrowUpIcon />}
                                onClick={collapseWonders}
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
                return <Box style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedEras[era.id]}
                        onChange={handleEraChange(era.id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVEraQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={pageStyles.card}>
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
                                onClick={collapseEras}
                                sx={pageStyles.collapseButton}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}

            <GlobalCollapseButton onCollapseAll={collapseAll} />
        </main>
    )
}

export default CivVPage