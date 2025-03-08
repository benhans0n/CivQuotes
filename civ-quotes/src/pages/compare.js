import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../components/navbar';
import { Box } from '@mui/system';
import { useMediaQuery, Grid, InputAdornment } from '@mui/material';
import { Helmet } from 'react-helmet';
import SearchIcon from '@mui/icons-material/Search';

// Import all quote data
import CivIVQuotes from '../data/civ-iv-quotes.json';
import CivVTechQuotes from '../data/civ-v-tech-quotes.json';
import CivVWonderQuotes from '../data/civ-v-wonder-quotes.json';
import CivVITechQuotes from '../data/civ-vi-tech-quotes.json';
import CivVIWonderQuotes from '../data/civ-vi-wonder-quotes.json';
import CivVICivicQuotes from '../data/civ-vi-civic-quotes.json';
import CivBETechQuotes from '../data/civ-be-tech-quotes.json';
import CivBEWonderQuotes from '../data/civ-be-wonder-quotes.json';
import CivBEAffinitiesQuotes from '../data/civ-be-affinities-quotes.json';

// styles
const styles = {
    box: isDesktop => ({
        width: isDesktop ? 90 + "%" : 95 + "%",
        marginLeft: isDesktop ? 5 + "%" : 2.5 + "%",
        marginTop: 2 + "%"
    }),
    searchBox: {
        width: 100 + "%"
    },
    card: {
        marginBottom: 2 + "%"
    },
    gameTitle: {
        color: '#ffffff',
        marginBottom: '16px',
        marginTop: '16px'
    }
};

const ComparePage = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [searchTerm, setSearchTerm] = useState('');

    // Function to search through quotes
    const searchQuotes = () => {
        const results = {
            'Civilization IV': [],
            'Civilization V': [],
            'Civilization VI': [],
            'Beyond Earth': []
        };

        if (!searchTerm) return results;

        const searchTermLower = searchTerm.toLowerCase();

        // Search Civ IV quotes
        if (CivIVQuotes?.quotes) {
            CivIVQuotes.quotes.forEach(quote => {
                if (quote?.tech?.toLowerCase().includes(searchTermLower)) {
                    results['Civilization IV'].push({
                        title: quote.tech,
                        type: 'Technology',
                        quotes: [{
                            quote: quote.quote,
                            speaker: quote.speaker
                        }]
                    });
                }
            });
        }

        // Search Civ V quotes
        if (CivVTechQuotes?.quotes) {
            CivVTechQuotes.quotes.forEach(quote => {
                if (quote?.tech?.toLowerCase().includes(searchTermLower)) {
                    results['Civilization V'].push({
                        title: quote.tech,
                        type: 'Technology',
                        quotes: [{
                            quote: quote.quote,
                            speaker: quote.speaker
                        }]
                    });
                }
            });
        }

        if (CivVWonderQuotes?.quotes) {
            CivVWonderQuotes.quotes.forEach(quote => {
                if (quote?.wonder?.toLowerCase().includes(searchTermLower)) {
                    results['Civilization V'].push({
                        title: quote.wonder,
                        type: 'Wonder',
                        quotes: [{
                            quote: quote.quote,
                            speaker: quote.speaker
                        }]
                    });
                }
            });
        }

        // Search Civ VI quotes
        if (CivVITechQuotes?.quotes) {
            CivVITechQuotes.quotes.forEach(quote => {
                if (quote?.tech?.toLowerCase().includes(searchTermLower)) {
                    results['Civilization VI'].push({
                        title: quote.tech,
                        type: 'Technology',
                        quotes: quote.quotes || []
                    });
                }
            });
        }

        if (CivVIWonderQuotes?.quotes) {
            CivVIWonderQuotes.quotes.forEach(quote => {
                if (quote?.wonder?.toLowerCase().includes(searchTermLower)) {
                    results['Civilization VI'].push({
                        title: quote.wonder,
                        type: 'Wonder',
                        quotes: quote.quotes || []
                    });
                }
            });
        }

        if (CivVICivicQuotes?.quotes) {
            CivVICivicQuotes.quotes.forEach(quote => {
                if (quote?.civic?.toLowerCase().includes(searchTermLower)) {
                    results['Civilization VI'].push({
                        title: quote.civic,
                        type: 'Civic',
                        quotes: quote.quotes || []
                    });
                }
            });
        }

        // Search Beyond Earth quotes
        if (CivBETechQuotes?.quotes) {
            CivBETechQuotes.quotes.forEach(quote => {
                if (quote?.tech?.toLowerCase().includes(searchTermLower)) {
                    results['Beyond Earth'].push({
                        title: quote.tech,
                        type: 'Technology',
                        quotes: [{
                            quote: quote.quote,
                            speaker: quote.speaker
                        }]
                    });
                }
            });
        }

        if (CivBEWonderQuotes?.quotes) {
            CivBEWonderQuotes.quotes.forEach(quote => {
                if (quote?.wonder?.toLowerCase().includes(searchTermLower)) {
                    results['Beyond Earth'].push({
                        title: quote.wonder,
                        type: 'Wonder',
                        quotes: [{
                            quote: quote.quote,
                            speaker: quote.speaker
                        }]
                    });
                }
            });
        }

        if (CivBEAffinitiesQuotes?.quotes) {
            CivBEAffinitiesQuotes.quotes.forEach(quote => {
                if (quote?.affinity?.toLowerCase().includes(searchTermLower)) {
                    results['Beyond Earth'].push({
                        title: quote.affinity,
                        type: 'Affinity',
                        quotes: [{
                            quote: quote.quote,
                            speaker: quote.speaker
                        }]
                    });
                }
            });
        }

        return results;
    };

    const results = searchQuotes();

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Compare Civilization Quotes</title>
                <link rel="canonical" href="http://civquotes.com/compare" />
            </Helmet>
            <Navbar />
            <Box style={styles.box(isDesktop)}>
                <Card style={{ marginBottom: '24px' }}>
                    <CardContent sx={{ 
                        padding: '16px !important',
                        '&:last-child': {
                            paddingBottom: '16px !important'
                        }
                    }}>
                        <TextField
                            style={styles.searchBox}
                            label="Search for technologies, wonders, or civics"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </CardContent>
                </Card>
                
                {searchTerm && (
                    <Grid container spacing={4}>
                        {Object.entries(results || {})
                            .filter(([_, quotes]) => quotes?.length > 0)
                            .map(([game, quotes]) => (
                                <Grid item xs={12} md={4} key={game} sx={{ paddingTop: '0 !important' }}>
                                    <Typography variant="h5" style={styles.gameTitle}>
                                        {game}
                                    </Typography>
                                    {quotes?.map((quote, index) => (
                                        <Card style={styles.card} key={index}>
                                            <CardContent sx={{ 
                                                padding: '16px !important',
                                                '&:last-child': {
                                                    paddingBottom: '16px !important'
                                                }
                                            }}>
                                                <Typography>
                                                    <b>{quote?.title}</b> <span style={{fontSize: 12}}>({quote?.type})</span>
                                                </Typography>
                                                <br />
                                                {quote?.quotes?.map((q, i) => (
                                                    <div key={i}>
                                                        <Typography sx={{ fontSize: 16 }}>
                                                            <i style={{whiteSpace: "pre-line"}}>
                                                                {q?.quote}
                                                            </i>
                                                        </Typography>
                                                        <br />
                                                        <Typography sx={{ fontSize: 12 }}>
                                                            <b>— {q?.speaker}</b>
                                                        </Typography>
                                                        {i < (quote?.quotes?.length || 0) - 1 && (
                                                            <hr />
                                                        )}
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Grid>
                            ))}
                    </Grid>
                )}
            </Box>
        </main>
    );
};

export default ComparePage; 