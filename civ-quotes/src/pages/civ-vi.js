import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CivVITechQuotes from '../data/civ-vi-tech-quotes.json'
import CivVICivicQuotes from '../data/civ-vi-civic-quotes.json'
import CivVIWonderQuotes from '../data/civ-vi-wonder-quotes.json'
import CivVINaturalWonderQuotes from '../data/civ-vi-natural-wonder-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { pageStyles } from '../components/PageStyles';

const CivVIPage = () => {
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
        } else if (section === 'Civics') {
            sectionPanels[`civic-${eraId}`] = false;
        } else if (section === 'Wonders') {
            sectionPanels[`wonder-${eraId}`] = false;
        } else if (section === 'Natural Wonders') {
            sectionPanels['natural-wonders'] = false;
        }
        setExpandedPanels(prev => ({
            ...prev,
            ...sectionPanels
        }));
    };

    const handleCollapseAll = () => {
        const allPanels = {};
        CivVITechQuotes.eras.forEach(era => {
            allPanels[`tech-${era.id}`] = false;
        });
        CivVICivicQuotes.eras.forEach(era => {
            allPanels[`civic-${era.id}`] = false;
        });
        CivVIWonderQuotes.eras.forEach(era => {
            allPanels[`wonder-${era.id}`] = false;
        });
        allPanels['natural-wonders'] = false;
        setExpandedPanels(allPanels);
    };

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization VI Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-vi" />
            </Helmet>
            <Navbar />
            <Typography variant="h1" style={pageStyles.pageTitle(isDesktop)}>
                Civilization VI
            </Typography>
            <h2 style={pageStyles.h2(isDesktop)}> Technologies </h2>
            {CivVITechQuotes.eras.map((era) => (
                <Box key={era.id} style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`tech-${era.id}`] || false}
                        onChange={handleAccordionChange(`tech-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVITechQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => (
                                <Card style={pageStyles.card} key={index}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <br />
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quotes[0].quote}
                                            </i>
                                        </Typography>
                                        <br />
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.quotes[0].speaker}</b>
                                        </Typography>
                                        <hr hidden={quote.quotes[1] == null} />
                                        <div hidden={quote.quotes[1] == null}>
                                            <Typography sx={{ fontSize: 16 }}>
                                                <i style={{whiteSpace: "pre-line"}}>
                                                    {quote.quotes[1]?.quote}
                                                </i>
                                            </Typography>
                                            <br />
                                            <Typography sx={{ fontSize: 12 }}>
                                                <b>— {quote.quotes[1]?.speaker}</b>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Technologies', era.id)}
                                startIcon={<KeyboardArrowUpIcon />}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}

            <h2 style={pageStyles.h2(isDesktop)}> Civics </h2>
            {CivVICivicQuotes.eras.map((era) => (
                <Box key={era.id} style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`civic-${era.id}`] || false}
                        onChange={handleAccordionChange(`civic-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVICivicQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => (
                                <Card style={pageStyles.card} key={index}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.civic}</b>
                                        </Typography>
                                        <br />
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quotes[0].quote}
                                            </i>
                                        </Typography>
                                        <br />
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.quotes[0].speaker}</b>
                                        </Typography>
                                        <hr hidden={quote.quotes[1] == null} />
                                        <div hidden={quote.quotes[1] == null}>
                                            <Typography sx={{ fontSize: 16 }}>
                                                <i style={{whiteSpace: "pre-line"}}>
                                                    {quote.quotes[1]?.quote}
                                                </i>
                                            </Typography>
                                            <br />
                                            <Typography sx={{ fontSize: 12 }}>
                                                <b>— {quote.quotes[1]?.speaker}</b>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Civics', era.id)}
                                startIcon={<KeyboardArrowUpIcon />}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}

            <h2 style={pageStyles.h2(isDesktop)}> Wonders </h2>
            {CivVIWonderQuotes.eras.map((era) => (
                <Box key={era.id} style={pageStyles.box(isDesktop)}>
                    <Accordion 
                        style={pageStyles.accordion}
                        expanded={expandedPanels[`wonder-${era.id}`] || false}
                        onChange={handleAccordionChange(`wonder-${era.id}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVIWonderQuotes.quotes.filter(quote => quote.era === era.id).map((quote, index) => (
                                <Card style={pageStyles.card} key={index}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.wonder}</b> <span style={{fontSize: 12}}>- Unlocked by {quote.unlocking_tech}</span>
                                        </Typography>
                                        <br />
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quotes[0].quote}
                                            </i>
                                        </Typography>
                                        <br />
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.quotes[0].speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button 
                                variant="contained" 
                                sx={pageStyles.collapseButton}
                                onClick={() => handleCollapseSection('Wonders', era.id)}
                                startIcon={<KeyboardArrowUpIcon />}
                            >
                                Collapse
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}

            <h2 style={pageStyles.h2(isDesktop)}> Natural Wonders </h2>
            <Box style={pageStyles.box(isDesktop)}>
                <Accordion 
                    style={pageStyles.accordion}
                    expanded={expandedPanels['natural-wonders'] || false}
                    onChange={handleAccordionChange('natural-wonders')}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Natural Wonders</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {CivVINaturalWonderQuotes.quotes.map((quote, index) => (
                            <Card style={pageStyles.card} key={index}>
                                <CardContent>
                                    <Typography>
                                        <b>{quote.wonder}</b>
                                    </Typography>
                                    <br />
                                    <Typography sx={{ fontSize: 16 }}>
                                        <i style={{whiteSpace: "pre-line"}}>
                                            {quote.quotes[0].quote}
                                        </i>
                                    </Typography>
                                    <br />
                                    <Typography sx={{ fontSize: 12 }}>
                                        <b>— {quote.quotes[0].speaker}</b>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                        <Button 
                            variant="contained" 
                            sx={pageStyles.collapseButton}
                            onClick={() => handleCollapseSection('Natural Wonders', null)}
                            startIcon={<KeyboardArrowUpIcon />}
                        >
                            Collapse
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <GlobalCollapseButton onCollapseAll={handleCollapseAll} />
        </main>
    );
};

export default CivVIPage;