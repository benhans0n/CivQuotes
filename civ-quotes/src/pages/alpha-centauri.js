import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlphaCentauriQuotes from '../data/ac-quotes.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

// styles
const accordionStyles = {
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
const AlphaCentauriPage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sid Meier's Alpha Centauri Quotes</title>
                <link rel="canonical" href="http://civquotes.com/alpha-centauri" />
            </Helmet>
            <Navbar />
            {AlphaCentauriQuotes.factions.map((faction, i) => {
                return <Box style={accordionStyles.box(isDesktop)} key={i}>
                    <Accordion style={accordionStyles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="uop-content"
                            id="uop-header"
                        >
                            <Typography>{faction.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {AlphaCentauriQuotes.quotes.filter(quote => quote.faction === faction.id).map((quote, j) => {
                                return <Card style={accordionStyles.card} key={i + '.' + j}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i style={{whiteSpace: "pre-line"}}>
                                                {quote.quote}
                                            </i>
                                        </Typography>
                                        <br></br>
                                        <Typography sx={{ fontSize: 12 }}>
                                            <b>— {quote.speaker}</b>, <i>{quote.work}</i> {quote.flavor_text}
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

export default AlphaCentauriPage