// Shared styles used across game pages
export const pageStyles = {
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
    }),
    collapseButton: {
        marginTop: '8px',
        width: '100%',
        backgroundColor: '#aaaaaa',
        color: '#000000',
        '&:hover': {
            backgroundColor: '#999999'
        }
    },
    globalCollapseButton: isDesktop => ({
        position: 'fixed',
        bottom: '20px',
        right: isDesktop ? '20px' : '10px',
        zIndex: 1000,
        backgroundColor: '#daa520',
        color: '#000000',
        '&:hover': {
            backgroundColor: '#c99510'
        }
    }),
    pageTitle: isDesktop => ({
        marginLeft: isDesktop ? 20 + "%" : 1 + "%",
        color: '#ffffff',
        fontFamily: "sans-serif",
        fontSize: '2em',
        marginBottom: '20px',
        marginTop: '20px'
    })
};