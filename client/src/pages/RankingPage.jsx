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
                        Tennis Player Ranking
                    </Typography>
                    <Typography variant="p" align="center">
                        Some description about the ranking system and how it works.
                        This text can be replaced with any relevant information you want to provide to the users.
                        It can also include links to more detailed explanations or rules regarding the ranking system.
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