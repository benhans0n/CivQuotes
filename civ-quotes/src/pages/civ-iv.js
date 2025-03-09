import * as React from 'react';
import CivIVQuotes from '../data/civ-iv-quotes.json'
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { useTheme } from '../components/ThemeContext';
import PageHeader from '../components/PageHeader';
import QuoteCard from '../components/QuoteCard';
import QuoteAccordion from '../components/QuoteAccordion';
import SectionHeader from '../components/SectionHeader';
import { useCollapsiblePanels } from '../hooks/useCollapsiblePanels';
import { SECTION_TYPES, PANEL_ID_PREFIXES } from '../constants/sections';
import { filterQuotesByEra, generatePanelId } from '../utils/quoteUtils';

// markup
const CivIVPage = () => {
    const { isDarkMode } = useTheme();

    const sections = {
        [SECTION_TYPES.TECHNOLOGIES]: (id) => generatePanelId(PANEL_ID_PREFIXES.TECH, id)
    };

    const getAllPanelIds = () => {
        const ids = [];
        CivIVQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id)));
        return ids;
    };

    const {
        handleAccordionChange,
        handleCollapseSection,
        handleCollapseAll,
        isPanelExpanded
    } = useCollapsiblePanels({ sections });

    return (
        <main>
            <PageHeader 
                title="Civilization IV"
                canonicalPath="/civ-iv"
            />
            <SectionHeader>{SECTION_TYPES.TECHNOLOGIES}</SectionHeader>
            {CivIVQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.TECH, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.TECHNOLOGIES, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivIVQuotes.quotes, era.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`tech-${era.id}-${index}`}
                                tech={quote.tech}
                                quote={quote.quote}
                                speaker={quote.speaker}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <GlobalCollapseButton onCollapseAll={() => handleCollapseAll(getAllPanelIds())} />
        </main>
    );
};

export default CivIVPage;