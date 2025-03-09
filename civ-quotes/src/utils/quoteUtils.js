import { PANEL_ID_PREFIXES } from '../constants/sections';

/**
 * Filter quotes by era ID
 * @param {Array} quotes - Array of quote objects
 * @param {string} eraId - Era ID to filter by
 * @returns {Array} Filtered quotes
 */
export const filterQuotesByEra = (quotes, eraId) => 
    quotes.filter(quote => quote.era === eraId);

/**
 * Filter quotes by faction ID
 * @param {Array} quotes - Array of quote objects
 * @param {string} factionId - Faction ID to filter by
 * @returns {Array} Filtered quotes
 */
export const filterQuotesByFaction = (quotes, factionId) => 
    quotes.filter(quote => quote.faction === factionId);

/**
 * Generate panel ID for accordions
 * @param {string} type - Panel type (tech, wonder, etc.)
 * @param {string} [id] - Optional ID to append
 * @returns {string} Generated panel ID
 */
export const generatePanelId = (type, id) => 
    id ? `${type}-${id}` : type.toLowerCase().replace(/\s+/g, '-');

/**
 * Get all panel IDs for a game's sections
 * @param {Object} sections - Map of section data
 * @returns {Array} Array of panel IDs
 */
export const getAllPanelIds = (sections) => {
    const ids = [];
    Object.entries(sections).forEach(([type, data]) => {
        if (data.items) {
            data.items.forEach(item => {
                ids.push(generatePanelId(data.prefix, item.id));
            });
        } else if (data.id) {
            ids.push(generatePanelId(data.prefix));
        }
    });
    return ids;
}; 