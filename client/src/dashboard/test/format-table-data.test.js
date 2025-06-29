import formatTableData from "../format-table-data";

it('should format the table data', () => {
    const definition = [
        {
            key: 'serve_total',
            label: 'Total Serves',
            format: (value) => value.toLocaleString(),
        },
        {
            key: 'serve_aces',
            label: 'Aces',
            format: (value) => value.toLocaleString(),
        },
        {
            key: 'serve_unret',
            label: 'Unreturned Serves',
            format: (value) => value.toLocaleString(),
        },
        {
            key: 'serve_sp1',
            label: 'Serve +1 Points',
            format: (value) => value.toLocaleString(),
        },
    ];
    const data = {
        serve_total: 123456,
        serve_aces: 7890,
        serve_unret: 4567,
        serve_sp1: 2345,
    };
    const expected = [
        { key: 'Total Serves', value: '123,456' },
        { key: 'Aces', value: '7,890' },
        { key: 'Unreturned Serves', value: '4,567' },
        { key: 'Serve +1 Points', value: '2,345' },
    ];
    expect(formatTableData(definition, data)).toEqual(expected);
});

it('should silently ignore missing keys', () => {
    const definition = [
        {
            key: 'serve_total',
            label: 'Total Serves',
            format: (value) => value.toLocaleString(),
        },
        {
            key: 'serve_aces',
            label: 'Aces',
            format: (value) => value.toLocaleString(),
        },
    ];
    const data = {
        serve_total: 123456,
    };
    const expected = [
        { key: 'Total Serves', value: '123,456' },
        { key: 'Aces', value: null }, // No value for Aces
    ];
    expect(formatTableData(definition, data)).toEqual(expected);
});

it('should format the key if no label is provided', () => {
    const definition = [
        {
            key: 'serve_total',
            format: (value) => value.toLocaleString(),
        },
    ];
    const data = {
        serve_total: 123456,
    };
    const expected = [
        { key: 'Serve Total', value: '123,456' }, // Key is used as label
    ];
    expect(formatTableData(definition, data)).toEqual(expected);
});

it('should stringify the value if no format function is provided', () => {
    const definition = [
        {
            key: 'serve_total',
            label: 'Total Serves',
        },
    ];
    const data = {
        serve_total: 123456,
    };
    const expected = [
        { key: 'Total Serves', value: '123456' }, // Value is stringified
    ];
    expect(formatTableData(definition, data)).toEqual(expected);
});