import { concatWords } from "./concat";

describe('concatWords', () => {
    test('[Яблоки, персики, груши] -> Яблоки, персики и груши', () => {
        const data = ['Яблоки', 'персики', 'груши'];
        const result = concatWords(data);
        const expectedData = 'Яблоки, персики и груши';

        expect(result).toBe(expectedData)
    });

    test('Первая буква всегда большая', () => {
        const data = ['яблоки', 'персики', 'груши'];
        const result = concatWords(data);
        const expectedData = 'Яблоки, персики и груши';

        expect(result).toBe(expectedData)
    });

    test('Все буквы маленькие кроме первой', () => {
        const data = ['ЯблОки', 'пеРсики', 'грУши'];
        const result = concatWords(data);
        const expectedData = 'Яблоки, персики и груши';

        expect(result).toBe(expectedData)
    });

    test('[Яблоки] -> Яблоки', () => {
        const data = ['Яблоки'];
        const result = concatWords(data);
        const expectedData = 'Яблоки';

        expect(result).toBe(expectedData)
    });

    test('[Яблоки, персики] -> Яблоки и персики', () => {
        const data = ['Яблоки', 'персики'];
        const result = concatWords(data);
        const expectedData = 'Яблоки и персики';

        expect(result).toBe(expectedData)
    });

    test('[Яблоки, персики, ""] -> Яблоки и персики', () => {
        const data = ['Яблоки', 'персики', ''];
        const result = concatWords(data);
        const expectedData = 'Яблоки и персики';

        expect(result).toBe(expectedData)
    });

    test('[Яблоки, "", персики] -> Яблоки и персики', () => {
        const data = ['Яблоки', '', 'персики'];
        const result = concatWords(data);
        const expectedData = 'Яблоки и персики';

        expect(result).toBe(expectedData)
    });

    test('["", персики, груши] -> Персики и груши', () => {
        const data = ['', 'персики', 'груши'];
        const result = concatWords(data);
        const expectedData = 'Персики и груши';

        expect(result).toBe(expectedData)
    });

    test('[я , персики, груши] -> Я, персики и груши', () => {
        const data = ['я', 'персики', 'груши'];
        const result = concatWords(data);
        const expectedData = 'Я, персики и груши';

        expect(result).toBe(expectedData)
    });

    test('["", ""] -> ""', () => {
        const data = ['', ''];
        const result = concatWords(data);
        const expectedData = '';

        expect(result).toBe(expectedData)
    });
})