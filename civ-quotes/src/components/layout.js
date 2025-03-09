import * as React from 'react';
import { useTheme } from './ThemeContext';

const Layout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: '#333333',
            minHeight: '100vh'
        }}>
            {children}
        </div>
    );
};

export default Layout; 