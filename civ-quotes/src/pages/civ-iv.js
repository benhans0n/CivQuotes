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
    const [expandedTechs, setExpandedTechs] = useState({});

    const handleTechChange = (eraId) => (event, isExpanded) => {
        setExpandedTechs(prev => ({ ...prev, [eraId]: isExpanded }));
    };

    const collapseTechs = () => {
        const newState = {};
        CivIVQuotes.eras.forEach(era => {
            newState[era.id] = false;
        });
        setExpandedTechs(newState);
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
                            {CivIVQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
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

            <GlobalCollapseButton onCollapseAll={collapseTechs} />
        </main>
    )
}

export default CivIVPage