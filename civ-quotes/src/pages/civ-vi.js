import * as React from 'react';
import CivVITechQuotes from '../data/civ-vi-tech-quotes.json'
import CivVICivicQuotes from '../data/civ-vi-civic-quotes.json'
import CivVIWonderQuotes from '../data/civ-vi-wonder-quotes.json'
import CivVINaturalWonderQuotes from '../data/civ-vi-natural-wonder-quotes.json'
import GlobalCollapseButton from '../components/GlobalCollapseButton';
import { useTheme } from '../components/ThemeContext';
import PageHeader from '../components/PageHeader';
import QuoteCard from '../components/QuoteCard';
import QuoteAccordion from '../components/QuoteAccordion';
import SectionHeader from '../components/SectionHeader';
import { useCollapsiblePanels } from '../hooks/useCollapsiblePanels';
import { SECTION_TYPES, PANEL_ID_PREFIXES } from '../constants/sections';
import { filterQuotesByEra, generatePanelId } from '../utils/quoteUtils';

const CivVIPage = () => {
    const { isDarkMode } = useTheme();

    const sections = {
        [SECTION_TYPES.TECHNOLOGIES]: (id) => generatePanelId(PANEL_ID_PREFIXES.TECH, id),
        [SECTION_TYPES.CIVICS]: (id) => generatePanelId(PANEL_ID_PREFIXES.CIVIC, id),
        [SECTION_TYPES.WONDERS]: (id) => generatePanelId(PANEL_ID_PREFIXES.WONDER, id),
        [SECTION_TYPES.NATURAL_WONDERS]: () => generatePanelId(PANEL_ID_PREFIXES.WONDER, 'natural')
    };

    const getAllPanelIds = () => {
        const ids = [];
        CivVITechQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id)));
        CivVICivicQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.CIVIC, era.id)));
        CivVIWonderQuotes.eras.forEach(era => ids.push(generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id)));
        ids.push(generatePanelId(PANEL_ID_PREFIXES.WONDER, 'natural'));
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
                title="Civilization VI"
                canonicalPath="/civ-vi"
            />
            <SectionHeader>{SECTION_TYPES.TECHNOLOGIES}</SectionHeader>
            {CivVITechQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.TECH, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.TECH, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.TECHNOLOGIES, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivVITechQuotes.quotes, era.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`tech-${era.id}-${index}`}
                                tech={quote.tech}
                                quotes={quote.quotes}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <SectionHeader>{SECTION_TYPES.CIVICS}</SectionHeader>
            {CivVICivicQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.CIVIC, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.CIVIC, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.CIVIC, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.CIVICS, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivVICivicQuotes.quotes, era.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`civic-${era.id}-${index}`}
                                civic={quote.civic}
                                quotes={quote.quotes}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <SectionHeader>{SECTION_TYPES.WONDERS}</SectionHeader>
            {CivVIWonderQuotes.eras.map((era) => (
                <QuoteAccordion
                    key={era.id}
                    id={generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id)}
                    title={era.name}
                    isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id))}
                    onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.WONDER, era.id))}
                    onCollapse={() => handleCollapseSection(SECTION_TYPES.WONDERS, era.id)}
                    isDarkMode={isDarkMode}
                >
                    {filterQuotesByEra(CivVIWonderQuotes.quotes, era.id)
                        .map((quote, index) => (
                            <QuoteCard
                                key={`wonder-${era.id}-${index}`}
                                wonder={quote.wonder}
                                quotes={quote.quotes}
                                unlockingTech={quote.unlocking_tech}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                </QuoteAccordion>
            ))}

            <SectionHeader>{SECTION_TYPES.NATURAL_WONDERS}</SectionHeader>
            <QuoteAccordion
                id={generatePanelId(PANEL_ID_PREFIXES.WONDER, 'natural')}
                title={SECTION_TYPES.NATURAL_WONDERS}
                isExpanded={isPanelExpanded(generatePanelId(PANEL_ID_PREFIXES.WONDER, 'natural'))}
                onAccordionChange={handleAccordionChange(generatePanelId(PANEL_ID_PREFIXES.WONDER, 'natural'))}
                onCollapse={() => handleCollapseSection(SECTION_TYPES.NATURAL_WONDERS)}
                isDarkMode={isDarkMode}
            >
                {CivVINaturalWonderQuotes.quotes.map((quote, index) => (
                    <QuoteCard
                        key={`natural-wonder-${index}`}
                        wonder={quote.wonder}
                        quotes={quote.quotes}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </QuoteAccordion>

            <GlobalCollapseButton onCollapseAll={() => handleCollapseAll(getAllPanelIds())} />
        </main>
    );
};

export default CivVIPage;