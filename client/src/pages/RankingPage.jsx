import RankingTable from "@/components/RankingTable";
import TennisParserApi from "@/tennis-parser-api/tennis-parser-api";
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { useLoaderData } from 'react-router';

export function loader() {
    const api = new TennisParserApi();
    return api.listRankings();
}

export default function RankingPage() {
    const rankings = useLoaderData();

    return (
        <Container maxWidth="md">
            <Stack sx={{ my: 4 }} spacing={4}>
                <Stack spacing={2}>
                    <Typography variant="h4" component="h1" align="center">
                        Tennis Server Rankings
                    </Typography>
                    <Typography variant="p" align="center">
                        These rankings reflect the efficiency of tennis players' serves, based on detailed statistical analysis. The methodology evaluates how effectively each player wins points on serve, considering factors such as first and second serve performance. For more details on the calculation, see the{' '}
                        <a href="/Serve_Analysis_4.html#SERVE-EFFICIENCY" target="_blank" >
                            Jupyter notebook.
                        </a>
                    </Typography>
                </Stack>
                <RankingTable rows={rankings} />
            </Stack>
        </Container>
    );
}