import useApi from "@/hooks/use-api";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

function isEqualPlayer(a, b) {
    return a.slug === b.slug;
}

export default function PlayerSearchBox({ onChange }) {
    const api = useApi();

    const { data: players, isPending } = useQuery({
        queryKey: ["players"],
        queryFn: () => api.listPlayers(),
        select: (data) => data.map(player => ({
            label: player.player,
            ...player
        }))
    });

    const navigate = useNavigate();

    const handleChange = (_, value) => {
        if (value?.slug) {
            navigate(`/players/${value.slug}`);
        }
        onChange?.(value);
    };

    return (
        <Stack direction="row" spacing={1} sx={{ width: "100%" }} alignItems="center">
            <SearchIcon />
            <Autocomplete
                disablePortal
                isOptionEqualToValue={isEqualPlayer}
                options={players}
                onChange={handleChange}
                sx={{ width: 300 }}
                loading={isPending}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            label="Search Players"
                        />
                    );
                }}
            />
        </Stack>
    );
}