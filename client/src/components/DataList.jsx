import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";

/**
 * A reusable data list component that displays key-value pairs in a table format.
 * 
 * @param {Object} props - The component props
 * @param {Array<Object>} props.rows - Array of objects containing key-value pairs to display
 * @param {string} props.rows[].key - The label/key to display in the first column
 * @param {string|number} props.rows[].value - The value to display in the second column
 * @param {string} props.label - Accessible label for the table
 * @returns {JSX.Element} A Material-UI table displaying the provided data
 */
export default function DataList({ rows, label }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label={label}>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.key}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                                {row.key}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}