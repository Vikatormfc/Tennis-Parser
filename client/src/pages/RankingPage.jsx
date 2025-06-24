import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import RankingTable from "@/components/RankingTable";
import useApi from "@/hooks/use-api";

export default function RankingPage() {
    const api = useApi();
    const { data: rankings, isLoading, error } = useQuery({
        queryKey: ['ranking'],
        queryFn: () => api.listRankings(),
    });

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
                {
                    isLoading && !error ? <Typography variant="body1" align="center">Loading...</Typography> :
                        <RankingTable rows={rankings} />
                }
            </Stack>
        </Container>
    );
}