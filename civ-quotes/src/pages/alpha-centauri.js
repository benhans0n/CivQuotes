import * as React from 'react';
import AlphaCentauriQuotes from '../data/ac-quotes.json'
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { useTheme } from '../components/ThemeContext';
import PageHeader from '../components/PageHeader';
import QuoteCard from '../components/QuoteCard';
import QuoteAccordion from '../components/QuoteAccordion';
import SectionHeader from '../components/SectionHeader';
import { useCollapsiblePanels } from '../hooks/useCollapsiblePanels';
import { SECTION_TYPES, PANEL_ID_PREFIXES } from '../constants/sections';
import { filterQuotesByFaction, generatePanelId } from '../utils/quoteUtils';

// markup
const AlphaCentauriPage = () => {
    const { isDarkMode } = useTheme();

    const sections = {
        [SECTION_TYPES.FACTIONS]: (id) => generatePanelId(PANEL_ID_PREFIXES.FACTION, id)
    };

    const getAllPanelIds = () => {
        const ids = [];
        AlphaCentauriQuotes.factions.forEach(faction => ids.push(generatePanelId(PANEL_ID_PREFIXES.FACTION, faction.id)));
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
                title="Sid Meier's Alpha Centauri"
                canonicalPath="/alpha-centauri"
            />
            <SectionHeader>{SECTION_TYPES.FACTIONS}</SectionHeader>
            {AlphaCentauriQuotes.factions.map((faction) => (
                <QuoteAccordion
                    key={faction.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.FACTION, faction.id)}
                    title={faction.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.FACTION, faction.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.FACTION, faction.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.FACTIONS, faction.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByFaction(AlphaCentauriQuotes.quotes, faction.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`faction-${faction.id}-${index}`}
                                quote={quote.quote}
                                speaker={quote.speaker}
                                work={quote.work}
                                flavorText={quote.flavor_text}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <GlobalCollapseButton onCollapseAll={() => handleCollapseAll(getAllPanelIds())} />
        </main>
    );
};

export default AlphaCentauriPage;