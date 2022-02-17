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

// styles
const accordionBoxStyle = {
    width: "60%",
    marginLeft: "20%",
    marginTop: "1%"
}

const accordionStyle = {
    backgroundColor: "#cccccc",
}

const cardStyle = {
    marginBottom: "1%",
}
// markup
const AlphaCentauriPage = () => {
    return (
        <main>
            <Navbar />
            {AlphaCentauriQuotes.factions.map((faction) => {
                return <Box style={accordionBoxStyle}>
                    <Accordion style={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="uop-content"
                            id="uop-header"
                        >
                            <Typography>{faction.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {AlphaCentauriQuotes.quotes.filter(quote => quote.faction === faction.id).map((quote) => {
                                return <Card style={cardStyle}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 16 }}>
                                            <i>
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