import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pageStyles } from './PageStyles';

// Comparison function for React.memo
const arePropsEqual = (prevProps, nextProps) => {
    // Compare primitive props
    const primitivePropsEqual = (
        prevProps.quote === nextProps.quote &&
        prevProps.speaker === nextProps.speaker &&
        prevProps.work === nextProps.work &&
        prevProps.flavorText === nextProps.flavorText &&
        prevProps.isDarkMode === nextProps.isDarkMode &&
        prevProps.title === nextProps.title &&
        prevProps.titlePrefix === nextProps.titlePrefix &&
        prevProps.tech === nextProps.tech &&
        prevProps.wonder === nextProps.wonder &&
        prevProps.level === nextProps.level &&
        prevProps.unlockingTech === nextProps.unlockingTech &&
        prevProps.civic === nextProps.civic
    );

    // If any primitive prop changed, return false
    if (!primitivePropsEqual) return false;

    // Deep compare quotes array if it exists
    if (prevProps.quotes || nextProps.quotes) {
        // If one has quotes and the other doesn't, they're not equal
        if (!prevProps.quotes || !nextProps.quotes) return false;

        // Compare quotes arrays
        return (
            prevProps.quotes.length === nextProps.quotes.length &&
            prevProps.quotes.every((quote, index) => 
                quote.quote === nextProps.quotes[index].quote &&
                quote.speaker === nextProps.quotes[index].speaker
            )
        );
    }

    // If we get here, all props are equal
    return true;
};

const QuoteCard = ({ 
    quote, 
    speaker, 
    work, 
    flavorText, 
    isDarkMode,
    title,
    titlePrefix,
    tech,
    wonder,
    level,
    quotes,
    unlockingTech,
    civic,
    sx
}) => {
    // Determine the actual title to display
    const displayTitle = title || tech || wonder || civic || (level ? `Level ${level}` : null);

    // Handle both single quote and quotes array formats
    const renderQuotes = () => {
        if (quotes) {
            return quotes.map((q, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <hr />}
                    <Typography variant="body1" sx={{ fontSize: 16 }}>
                        <i style={{whiteSpace: "pre-line"}}>
                            {q.quote}
                        </i>
                    </Typography>
                    <br />
                    <Typography variant="caption" sx={{ fontSize: 12 }}>
                        <b>— {q.speaker}</b>
                    </Typography>
                </React.Fragment>
            ));
        } else {
            return (
                <>
                    <Typography variant="body1" sx={{ fontSize: 16 }}>
                        <i style={{whiteSpace: "pre-line"}}>
                            {quote}
                        </i>
                    </Typography>
                    <br />
                    <Typography variant="caption" sx={{ fontSize: 12 }}>
                        <b>— {speaker}</b>
                        {work && work !== "" && <>, <i>{work}</i></>}
                        {flavorText && <> {flavorText}</>}
                    </Typography>
                </>
            );
        }
    };

    return (
        <Card sx={sx ? {
            ...sx,
            backgroundColor: isDarkMode ? '#222222' : '#ffffff',
            '& .MuiCardContent-root': {
                backgroundColor: isDarkMode ? '#222222' : '#ffffff'
            }
        } : pageStyles.card(isDarkMode)}>
            <CardContent>
                {displayTitle && (
                    <>
                        <Typography variant="subtitle1">
                            <b>{titlePrefix && `${titlePrefix} `}{displayTitle}</b>
                            {unlockingTech && <span style={{fontSize: 12}}> - Unlocked by {unlockingTech}</span>}
                        </Typography>
                        <br />
                    </>
                )}
                {renderQuotes()}
            </CardContent>
        </Card>
    );
};

// Export memoized version of QuoteCard
export default React.memo(QuoteCard, arePropsEqual); 