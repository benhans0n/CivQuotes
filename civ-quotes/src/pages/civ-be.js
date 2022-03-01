import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CivBETechQuotes from '../data/civ-be-tech-quotes.json'
import CivBEWonderQuotes from '../data/civ-be-wonder-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';

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
const AlphaCentauriPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <main>
            <Navbar />
            <h2 style={styles.h2(isDesktop)}> Technologies </h2>
            {CivBETechQuotes.factions.map((faction) => {
                return <Box style={styles.box(isDesktop)}>
                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
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
                                            <i>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>{quote.work != "" ? ", " : ""}<i>{quote.work != "" ? quote.work : ""}</i>
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
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
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
                                        <i>
                                            {quote.quote}
                                        </i>
                                    </Typography>
                                    <br></br>
                                    <Typography sx={{ fontSize: 12 }}>
                                        <b>— {quote.speaker}</b>{quote.work != "" ? ", " : ""}<i>{quote.work != "" ? quote.work : ""}</i>
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

export default AlphaCentauriPage