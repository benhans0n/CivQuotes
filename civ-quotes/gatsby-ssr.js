import React from 'react';
import { ThemeProvider } from './src/components/ThemeContext';
import Layout from './src/components/layout';

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => (
    <Layout>{element}</Layout>
); 