import * as React from 'react';
import CivBETechQuotes from '../data/civ-be-tech-quotes.json'
import CivBEAffinityQuotes from '../data/civ-be-affinities-quotes.json'
import CivBEWonderQuotes from '../data/civ-be-wonder-quotes.json'
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { useTheme } from '../components/ThemeContext';
import PageHeader from '../components/PageHeader';
import QuoteCard from '../components/QuoteCard';
import QuoteAccordion from '../components/QuoteAccordion';
import SectionHeader from '../components/SectionHeader';
import { useCollapsiblePanels } from '../hooks/useCollapsiblePanels';
import { SECTION_TYPES, PANEL_ID_PREFIXES } from '../constants/sections';
import { filterQuotesByFaction, generatePanelId } from '../utils/quoteUtils';

const CivBEPage = () => {
    const { isDarkMode } = useTheme();

    const sections = {
        [SECTION_TYPES.TECHNOLOGIES]: (id) => generatePanelId(PANEL_ID_PREFIXES.TECH, id),
        [SECTION_TYPES.AFFINITIES]: (id) => generatePanelId(PANEL_ID_PREFIXES.AFFINITY, id),
        [SECTION_TYPES.WONDERS]: () => generatePanelId(PANEL_ID_PREFIXES.WONDER)
    };

    const getAllPanelIds = () => {
        const ids = [];
        CivBETechQuotes.factions.forEach(faction => ids.push(generatePanelId(PANEL_ID_PREFIXES.TECH, faction.id)));
        CivBEAffinityQuotes.affinities.forEach(affinity => ids.push(generatePanelId(PANEL_ID_PREFIXES.AFFINITY, affinity.id)));
        ids.push(generatePanelId(PANEL_ID_PREFIXES.WONDER));
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
                title="Civilization: Beyond Earth"
                canonicalPath="/civ-be"
            />
            <SectionHeader>{SECTION_TYPES.TECHNOLOGIES}</SectionHeader>
            {CivBETechQuotes.factions.map((faction) => (
                <QuoteAccordion
                    key={faction.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.TECH, faction.id)}
                    title={faction.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.TECH, faction.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.TECH, faction.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.TECHNOLOGIES, faction.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByFaction(CivBETechQuotes.quotes, faction.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`tech-${faction.id}-${index}`}
                                tech={quote.tech}
                                quote={quote.quote}
                                speaker={quote.speaker}
                                work={quote.work}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <SectionHeader>{SECTION_TYPES.AFFINITIES}</SectionHeader>
            {CivBEAffinityQuotes.affinities.map((affinity) => (
                <QuoteAccordion
                    key={affinity.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.AFFINITY, affinity.id)}
                    title={affinity.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.AFFINITY, affinity.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.AFFINITY, affinity.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.AFFINITIES, affinity.id)}
                    isDarkMode={isDarkMode}
                >
                    {CivBEAffinityQuotes.quotes
                        .filter(quote => quote.affinity === affinity.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`affinity-${affinity.id}-${index}`}
                                quote={quote.quote}
                                speaker={quote.speaker}
                                work={quote.work}
                                level={quote.level}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <SectionHeader>{SECTION_TYPES.WONDERS}</SectionHeader>
            <QuoteAccordion
                id={generatePanelId(PANEL_ID_PREFIXES.WONDER)}
                title={SECTION_TYPES.WONDERS}
                isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.WONDER))}
                onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.WONDER))}
                onCollapse={() => handleCollapseSection(SECTION_TYPES.WONDERS)}
                isDarkMode={isDarkMode}
            >
                {CivBEWonderQuotes.quotes.map((quote, index) => (
                    <QuoteCard
                        key={`wonder-${index}`}
                        wonder={quote.wonder}
                        quote={quote.quote}
                        speaker={quote.speaker}
                        work={quote.work}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </QuoteAccordion>

            <GlobalCollapseButton onCollapseAll={() => handleCollapseAll(getAllPanelIds())} />
        </main>
    );
};

export default CivBEPage;