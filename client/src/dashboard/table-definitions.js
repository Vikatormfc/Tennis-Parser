function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
}

function formatPercentage(num) {
    return (num / 100).toLocaleString('en-US', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
}

/**
 * Server stats table for the player dashboard.
 */
export const serverTableDefinition = [
    { key: 'serve_total', label: 'Total Serves', format: formatNumber },
    { key: 'serve_aces', label: 'Aces', format: formatNumber },
    { key: 'serve_unret', label: 'Unreturned Serves', format: formatNumber },
    { key: 'serve_sp1', label: 'Serve +1 Points', format: formatNumber },
    { key: 'serve_ace_rate', label: 'Ace Rate', format: formatPercentage },
    { key: 'serve_unret_rate', label: 'Unreturned Rate', format: formatPercentage },
    { key: 'serve_sp1_rate', label: 'Serve +1 Rate', format: formatPercentage },
    { key: 'serve_SE', label: 'Serve Efficiency Score', format: formatPercentage },
];

/**
 * Return stats table for the player dashboard.
 */
export const returnTableDefinition = [
    { key: 'ret_total', label: 'Total Returns', format: formatNumber },
    { key: 'ret_wins', label: 'Return Winners', format: formatNumber },
    { key: 'ret_unf', label: 'Return Unforced Errors', format: formatNumber },
    { key: 'ret_win_rate', label: 'Return Winner Rate', format: formatPercentage },
    { key: 'ret_err_rate', label: 'Return Error Rate', format: formatPercentage },
    { key: 'rp1_total', label: 'Return +1 Total', format: formatNumber },
    { key: 'rp1_pts', label: 'Return +1 Points', format: formatNumber },
    { key: 'rp1_rate', label: 'Return +1 Rate', format: formatPercentage },
];