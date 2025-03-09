import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import { pageStyles } from './PageStyles';
import { useMediaQuery } from '@mui/material';

const PageHeader = ({ title, canonicalPath }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} Quotes</title>
                <link rel="canonical" href={`http://civquotes.com${canonicalPath}`} />
            </Helmet>
            <Navbar />
            <Typography variant="h1" sx={pageStyles.pageTitle(isDesktop)}>
                {title}
            </Typography>
        </>
    );
};

export default PageHeader; 