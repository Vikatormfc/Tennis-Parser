import { capitalCase } from 'change-case';

/**
 * @typedef {Object} RowDefinition
 * @property {string} key - The key for the data.
 * @property {string} [label] - Optional label for the row.
 * @property {function} [format] - Function to format the value.
 */

/**
 * Converts a data object into an array of formatted table rows based on the provided definitions.
 * This is used for the Dashboard page to display player stats in a table format.
 * 
 * @param {Array<RowDefinition>} definition - Array of row definitions.
 * @param {Record<string, string>} data - Data object containing key-value pairs.
 * @returns {Array<{key: string, value: string|null}>} - Formatted table data.
 * @example
 * const definition = [
 *     { key: 'serve_total', label: 'Total Serves', format: (value) => value.toLocaleString() },
 *     { key: 'serve_aces', label: 'Aces', format: (value) => value.toLocaleString() },
 *     { key: 'serve_unreturned', label: 'Unreturned Serves', format: (value) => value.toLocaleString() },
 *     { key: 'serve_plus1_points', label: 'Serve +1 Points', format: (value) => value.toLocaleString() },
 * ];
 * const data = {
 *     serve_total: 123456,
 *     serve_aces: 7890,
 *     serve_unreturned: 4567,
 *     serve_plus1_points: 2345,
 * };
 * const formattedData = formatTableData(definition, data);
 * // formattedData will be an array of objects with keys and formatted values.
 */
export default function formatTableData(definition, data) {
    return definition.map((row) => {
        const value = data[row.key];
        const format = row.format ?? String;

        return {
            key: row.label || capitalCase(row.key),
            value: value ? format(data[row.key]) : null,
        };
    });
}
