import DataList from "@/components/DataList";
import {
    formatTableData,
    returnTableDefinition,
    serverTableDefinition,
} from "@/dashboard";
import TennisParserApi from "@/tennis-parser-api/tennis-parser-api";
import {
    Container,
    Stack,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import { useState } from "react";
import { redirect, useLoaderData } from "react-router";

const tables = [
    { label: "Serving", definition: serverTableDefinition },
    { label: "Returning", definition: returnTableDefinition },
];

export async function loader({ params }) {
    const api = new TennisParserApi();
    const players = await api.listPlayers();
    if (!params.slug) {
        return redirect(`/players/${players[0].slug}`);
    }
    const playerDashboard = await api.getPlayerDashboard(params.slug);

    return {
        playerDashboard,
        players
    };
}

export default function DashboardPage() {
    const { playerDashboard } = useLoaderData();

    const [tab, setTab] = useState(0);

    const handleTabChange = (e, newValue) => {
        setTab(newValue);
    };

    const currentTable = tables[tab] ?? tables[0];
    const tableRows = formatTableData(currentTable.definition, playerDashboard);

    return (
        <Container maxWidth="md">
            <Stack sx={{ my: 4 }} spacing={4}>
                <Stack spacing={2}>
                    <Typography variant="h4" component="h1" align="center">
                        {playerDashboard.player}
                    </Typography>
                    <Tabs value={tab} onChange={handleTabChange}>
                        {tables.map(({ label }) => (
                            <Tab key={label} label={label} />
                        ))}
                    </Tabs>
                    <DataList rows={tableRows} label={currentTable.label} />
                </Stack>
            </Stack>
        </Container>
    );
}
