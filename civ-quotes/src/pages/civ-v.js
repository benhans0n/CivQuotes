import * as React from 'react';
import CivVTechQuotes from '../data/civ-v-tech-quotes.json'
import CivVWonderQuotes from '../data/civ-v-wonder-quotes.json'
import CivVEraQuotes from '../data/civ-v-era-quotes.json'
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { useTheme } from '../components/ThemeContext';
import PageHeader from '../components/PageHeader';
import QuoteCard from '../components/QuoteCard';
import QuoteAccordion from '../components/QuoteAccordion';
import SectionHeader from '../components/SectionHeader';
import { useCollapsiblePanels } from '../hooks/useCollapsiblePanels';
import { SECTION_TYPES, PANEL_ID_PREFIXES } from '../constants/sections';
import { filterQuotesByEra, generatePanelId } from '../utils/quoteUtils';

const CivVPage = () => {
    const { isDarkMode } = useTheme();

    const sections = {
        [SECTION_TYPES.TECHNOLOGIES]: (id) => generatePanelId(PANEL_ID_PREFIXES.TECH, id),
        [SECTION_TYPES.WONDERS]: (id) => generatePanelId(PANEL_ID_PREFIXES.WONDER, id),
        [SECTION_TYPES.ERAS]: (id) => generatePanelId(PANEL_ID_PREFIXES.ERA, id)
    };

    const getAllPanelIds = () => {
        const ids = [];
        CivVTechQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id)));
        CivVWonderQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id)));
        CivVEraQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.ERA, era.id)));
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
                title="Civilization V"
                canonicalPath="/civ-v"
            />
            <SectionHeader>{SECTION_TYPES.TECHNOLOGIES}</SectionHeader>
            {CivVTechQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.TECH, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.TECHNOLOGIES, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivVTechQuotes.quotes, era.id)
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

            <SectionHeader>{SECTION_TYPES.WONDERS}</SectionHeader>
            {CivVWonderQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.WONDERS, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivVWonderQuotes.quotes, era.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`wonder-${era.id}-${index}`}
                                wonder={quote.wonder}
                                quote={quote.quote}
                                speaker={quote.speaker}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <SectionHeader>{SECTION_TYPES.ERAS}</SectionHeader>
            {CivVEraQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.ERA, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.ERA, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.ERA, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.ERAS, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivVEraQuotes.quotes, era.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`era-${era.id}-${index}`}
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

export default CivVPage;