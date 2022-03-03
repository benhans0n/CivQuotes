import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CivIVQuotes from '../data/civ-iv-quotes.json'
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
    }
}

// markup
const CivIVPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Civilization IV Quotes</title>
                <link rel="canonical" href="http://civquotes.com/civ-iv" />
            </Helmet>
            <Navbar />
            {CivIVQuotes.eras.map((era) => {
                return <Box style={styles.box(isDesktop)}>
                    <Accordion style={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{era.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {CivIVQuotes.quotes.filter(quote => quote.era === era.id).map((quote) => {
                                return <Card style={styles.card}>
                                    <CardContent>
                                        <Typography>
                                            <b>{quote.tech}</b>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i>
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

export default CivIVPage