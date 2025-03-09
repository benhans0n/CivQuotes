// Shared styles used across game pages
export const pageStyles = {
    box: isDesktop => ({
        width: isDesktop ? 60 + "%" : 95 + "%",
        marginLeft: isDesktop ? 20 + "%" : 2.5 + "%",
        marginTop: 1 + "%"
    }),
    accordion: (isDarkMode = false) => ({
        backgroundColor: isDarkMode ? '#222222' : '#cccccc',
        color: isDarkMode ? '#ffffff' : '#000000',
    }),
    card: (isDarkMode = false) => ({
        marginBottom: 2 + "%",
        backgroundColor: isDarkMode ? '#333333' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
    }),
    h2: (isDesktop, isDarkMode = false) => ({
        marginLeft: isDesktop ? 20 + "%" : 2.5 + "%",
        marginTop: 2 + "%",
        marginBottom: 1 + "%",
        fontSize: isDesktop ? 24 : 20,
        color: '#ffffff'
    }),
    collapseButton: {
        marginTop: 2 + "%",
        backgroundColor: '#daa520',
        color: '#111111',
        '&:hover': {
            backgroundColor: '#c99510'
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
    pageTitle: (isDesktop, isDarkMode = false) => ({
        textAlign: "left",
        marginLeft: isDesktop ? 20 + "%" : 2.5 + "%",
        marginTop: isDesktop ? 2 + "%" : 5 + "%",
        marginBottom: isDesktop ? 2 + "%" : 5 + "%",
        fontSize: isDesktop ? 32 : 24,
        color: '#ffffff'
    })
};