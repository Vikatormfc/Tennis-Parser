import { loader } from "../DashboardPage";

const mockApi = vi.hoisted(() => ({
    getPlayerDashboard: vi.fn(),
    listPlayers: vi.fn(),
}));

vi.mock("@/tennis-parser-api/tennis-parser-api", () => ({
    __esModule: true,
    default: vi.fn(() => mockApi),
}));

const mockPlayerList = [
    { slug: 'ivan-lendl', name: 'Ivan Lendl' },
];

describe('loader', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockApi.listPlayers.mockResolvedValue(mockPlayerList);
    });

    it('should redirect to the first player if no slug is provided', async () => {
        const res = await loader({ params: {} });
        expect(res.status).toBe(302);
        expect(res.headers.get('location')).toBe('/players/ivan-lendl');
    });

    it('should load the player dashboard data for a given slug', async () => {
        const expectedData = { player: 'Ivan Lendl', slug: 'ivan-lendl' };
        mockApi.getPlayerDashboard.mockResolvedValue(expectedData);
        const res = await loader({ params: { slug: 'ivan-lendl' } });
        expect(res).toEqual({
            playerDashboard: expectedData,
            players: mockPlayerList,
        });
    });

    it('should return 404 if the player is not found', async () => {
        mockApi.getPlayerDashboard.mockRejectedValue(new Error('Player not found'));

        await expect(loader({ params: { slug: 'unknown-player' } })).rejects.toThrow('Player not found');
    });
});