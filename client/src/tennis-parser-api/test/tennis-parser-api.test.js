import TennisParserApi from '../tennis-parser-api';

const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

beforeEach(() => {
    vi.resetAllMocks();
});

describe('TennisParserApi', () => {

    it('should construct a TennisParserApi instance', () => {
        const api = new TennisParserApi();
        expect(api).toBeDefined();
        expect(api).toBeInstanceOf(TennisParserApi);
    });

    describe('listRankings', () => {
        it('should return a list of rankings', async () => {
            const expectedRankings = [
                { id: 1, lastName: 'Lastname 1', firstName: 'Firstname 1', age: 25 },
            ];
            mockFetch.mockResolvedValue(new Response(JSON.stringify({ rankings: expectedRankings }), {
                status: 200
            }));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });
            const rankings = await api.listRankings();

            expect(mockFetch).toHaveBeenCalledWith('https://example.com/rankings/server');
            expect(rankings).toEqual(expectedRankings);
        });

        it('should throw an error on fetch failure', async () => {
            mockFetch.mockRejectedValue(new Error('Network error'));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });

            await expect(api.listRankings()).rejects.toThrow('Network error');
        });

        it('should handle non-200 responses', async () => {
            mockFetch.mockResolvedValue(new Response(JSON.stringify({ error: 'Not Found' }), { status: 404 }));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });

            await expect(api.listRankings()).rejects.toThrow('HTTP error! status: 404');
        });
    });

    describe('getPlayerDashboard', async () => {
        it('should return player dashboard data', async () => {
            const expectedDashboard = { player: 'Ivan Lendl', slug: 'ivan-lendl' };
            mockFetch.mockResolvedValue(new Response(JSON.stringify({ player: expectedDashboard }), {
                status: 200
            }));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });
            const dashboard = await api.getPlayerDashboard('ivan-lendl');

            expect(mockFetch).toHaveBeenCalledWith('https://example.com/players/ivan-lendl');
            expect(dashboard).toEqual(expectedDashboard);
        });

        it('should throw an error on fetch failure', async () => {
            mockFetch.mockRejectedValue(new Error('Network error'));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });

            await expect(api.getPlayerDashboard('ivan-lendl')).rejects.toThrow('Network error');
        });

        it('should handle non-200 responses', async () => {
            mockFetch.mockResolvedValue(new Response(JSON.stringify({ error: 'Not Found' }), { status: 404 }));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });

            await expect(api.getPlayerDashboard('ivan-lendl')).rejects.toThrow('HTTP error! status: 404');
        });
    });

    describe('listPlayers', () => {
        it('should return a list of players', async () => {
            const expectedPlayers = [
                { slug: 'ivan-lendl', name: 'Ivan Lendl' },
                { slug: 'pete-sampras', name: 'Pete Sampras' },
            ];
            mockFetch.mockResolvedValue(new Response(JSON.stringify({ players: expectedPlayers }), {
                status: 200
            }));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });
            const players = await api.listPlayers();

            expect(mockFetch).toHaveBeenCalledWith('https://example.com/players');
            expect(players).toEqual(expectedPlayers);
        });

        it('should throw an error on fetch failure', async () => {
            mockFetch.mockRejectedValue(new Error('Network error'));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });

            await expect(api.listPlayers()).rejects.toThrow('Network error');
        });

        it('should handle non-200 responses', async () => {
            mockFetch.mockResolvedValue(new Response(JSON.stringify({ error: 'Not Found' }), { status: 404 }));

            const api = new TennisParserApi({ baseUrl: 'https://example.com' });

            await expect(api.listPlayers()).rejects.toThrow('HTTP error! status: 404');
        });
    });
});