import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CivVTechQuotes from '../data/civ-v-tech-quotes.json'
import CivVWonderQuotes from '../data/civ-v-wonder-quotes.json'
import CivVEraQuotes from '../data/civ-v-era-quotes.json'
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
const CivVPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization V Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-v" />
            </Helmet>
            <Navbar />
            <h2 style={styles.h2(isDesktop)}> Technologies </h2>
            {CivVTechQuotes.eras.map((era) => {
                return <Box style={styles.box(isDesktop)}>
                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVTechQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={styles.card}>
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
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
            <h2 style={styles.h2(isDesktop)}> Wonders </h2>
            {CivVWonderQuotes.eras.map((era) => {
                return <Box style={styles.box(isDesktop)}>

                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVWonderQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
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
                                            <b>— {quote.speaker}</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
            <h2 style={styles.h2(isDesktop)}> Eras </h2>
            {CivVEraQuotes.eras.map((era) => {
                return <Box style={styles.box(isDesktop)}>

                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivVEraQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={styles.card}>
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
                        </AccordionDetails>
                    </Accordion>
                </Box>
            })}
        </main>
    )
}

export default CivVPage