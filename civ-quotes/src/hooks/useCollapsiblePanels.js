import { useState } from 'react';

/**
 * Hook for managing collapsible panel states across game pages
 * @param {Object} config - Configuration object
 * @param {Object} config.sections - Map of section names to their panel ID generators
 * @param {Object} config.initialState - Optional initial state for panels
 * @returns {Object} Panel state and handlers
 */
export const useCollapsiblePanels = ({ sections, initialState = {} }) => {
    const [expandedPanels, setExpandedPanels] = useState(initialState);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prev => ({
            ...prev,
            [panel]: isExpanded
        }));
    };

    const handleCollapseSection = (sectionName, id = null) => {
        const sectionPanels = {};
        const panelIdGenerator = sections[sectionName];
        
        if (panelIdGenerator) {
            if (id !== null) {
                sectionPanels[panelIdGenerator(id)] = false;
            } else {
                sectionPanels[sectionName.toLowerCase().replace(/\s+/g, '-')] = false;
            }
        }

        setExpandedPanels(prev => ({
            ...prev,
            ...sectionPanels
        }));
    };

    const handleCollapseAll = (allPanelIds) => {
        const allPanels = {};
        allPanelIds.forEach(panelId => {
            allPanels[panelId] = false;
        });
        setExpandedPanels(allPanels);
    };

    const isPanelExpanded = (panelId) => {
        return expandedPanels[panelId] || false;
    };

    return {
        expandedPanels,
        handleAccordionChange,
        handleCollapseSection,
        handleCollapseAll,
        isPanelExpanded
    };
}; 