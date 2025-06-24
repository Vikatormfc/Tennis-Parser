import { Container, Stack, Typography } from "@mui/material";

export default function HomePage() {
    return <Container maxWidth="md">
        <Stack sx={{ my: 4 }} spacing={4}>
            <Typography variant="h4" component="h1" align="center">Welcome to Tennis Parser!</Typography>
            <Typography variant="body1" align="center">
                This is a simple application that parses tennis match data and provides insights into player performance.
                You can explore player statistics, rankings, and more.
            </Typography>
            <Typography variant="body1" align="center">
                Use the navigation bar to access different sections of the application.
            </Typography>
        </Stack>
    </Container>;
}