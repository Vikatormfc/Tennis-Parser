import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { capitalCase } from 'change-case';

export default function RankingTable({ rows = [] }) {
    const columns = Object.keys(rows[0] || {}).map((key) => ({
        field: key,
        headerName: capitalCase(key),
        width: key === 'name' ? 200 : 100,
    })).filter(({ field }) => field !== 'id');
    return (
        <Box sx={{
            height: '70dvh', width: '100%'
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 25,
                        },
                    },
                }}
                pageSizeOptions={[25]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
