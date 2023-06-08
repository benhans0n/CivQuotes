import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CivVITechQuotes from '../data/civ-vi-tech-quotes.json'
import CivVIWonderQuotes from '../data/civ-vi-wonder-quotes.json'
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
const CivVIPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization VI Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-vi" />
            </Helmet>
            <Navbar />
            <h2 style={styles.h2(isDesktop)}> Technologies </h2>
            {CivVITechQuotes.eras.map((era) => {
                return <Box style={styles.box(isDesktop)}>
                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVITechQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={styles.card}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quotes[0].quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.quotes[0].speaker}</b>
                                        </Typography>
                                        <hr hidden={quote.quotes[1] == null}></hr>
                                        <div hidden={quote.quotes[1] == null}>
                                            <Typography sx={{ fontSize: 16 }}>
                                                <i style={{whiteSpace: "pre-line"}}>
                                                    {quote.quotes[1] == null ? "" : quote.quotes[1].quote}
                                                </i>
                                            </Typography>
                                            <br></br>
                                            <Typography sx={{ fontSize: 12 }}>
                                                <b>— {quote.quotes[1] == null ? "" : quote.quotes[1].speaker}</b>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            })}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
            <h2 style={styles.h2(isDesktop)}> Wonders </h2>
            {CivVIWonderQuotes.eras.map((era) => {
                return <Box style={styles.box(isDesktop)}>

                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVIWonderQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={styles.card}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.wonder}</b> <span style={{fontSize: 12}}>- Unlocked by {quote.unlocking_tech}</span>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quotes[0].quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.quotes[0].speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
        </main>
    )
}

export default CivVIPage