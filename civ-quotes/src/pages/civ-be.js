import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CivBETechQuotes from '../data/civ-be-tech-quotes.json'
import CivBEAffinityQuotes from '../data/civ-be-affinities-quotes.json'
import CivBEWonderQuotes from '../data/civ-be-wonder-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

// styles
const styles = {
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
    h2: isDesktop => ({
        marginLeft: isDesktop ? 20 + "%" : 1 + "%",
        color: '#ffffff',
        fontFamily: "sans-serif"
    })
}

// markup
const CivBEPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization: Beyond Earth Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-be" />
            </Helmet>
            <Navbar />
            <h2 style={styles.h2(isDesktop)}> Technologies </h2>
            {CivBETechQuotes.factions.map((faction) => {
                return <Box style={styles.box(isDesktop)}>
                    <Accordion style={styles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{faction.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivBETechQuotes.quotes.filter(quote => quote.faction === faction.id).map((quote) => {
                                return <Card style={styles.card}>
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
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
            <h2 style={styles.h2(isDesktop)}> Affinities </h2>
            {CivBEAffinityQuotes.affinities.map((affinity) => {
                return <Box style={styles.box(isDesktop)}>
                    <Accordion style={styles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>{affinity.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivBEAffinityQuotes.quotes.filter(quote => quote.affinity === affinity.id).map((quote) => {
                                return <Card style={styles.card}>
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
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
            <h2 style={styles.h2(isDesktop)}> Wonders </h2>
            <Box style={styles.box(isDesktop)}>
                <Accordion style={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Wonders</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {CivBEWonderQuotes.quotes.map((quote) => {
                            return <Card style={styles.card}>
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
                    </AccordionDetails>
                </Accordion>
            </Box>
        </main>
    )
}

export default CivBEPage