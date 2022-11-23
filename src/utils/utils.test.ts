
import { positiveSum, repeatStr, boolToWord, promiseFunction, manyTimeouts, getData } from './utils';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('positiveSum', () => {
    test.each([
        {testName: 'передали массив с позитивными числами', data: [1, 2, 3, 4, 5], expected: 15},
        {testName: 'передали массив с позитивными и негативными числами', data: [1, -2, 3, -4], expected: 4},
        {testName: 'передали массив с негативными числами', data: [-1, -2, -3, -4], expected: 0}
    ])('$testName', ({data, expected}) => {
        expect(positiveSum(data)).toBe(expected);
    });
})

describe('repeatStr', () => {
    test.each([
        {count: 5, string: "Маша", expected: 'МашаМашаМашаМашаМаша'}, 
        { count: 0, string: "Маша", expected: '' }
    ])('Передаем  $count раз строку $string, и хотим получить $expected', ({count, string, expected}) => {
        expect(repeatStr(count, string)).toBe(expected);
    })

})

describe('boolToWord', () => {
    test.each([
        {data: true, expected: 'Да'},
        {data: false, expected: 'Нет'},

    ])('Передаем $data, получаем $expected', ({data, expected}) => {
        expect(boolToWord(data)).toBe(expected);

    })
})

describe('promiseFunction', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('test promise', () => { 
        const promise = promiseFunction();

        jest.runAllTimers();
        
        return expect(promise).resolves.toBe('ok');
    });
    
    test('many timeouts', () => { 
        const promise = manyTimeouts();

        jest.runAllTimers();
        
        return expect(promise).resolves.toBe('ok');
    });
})

interface Data {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
    lat: string,
    lng: string
    }},
    phone: string,
    website: string,
    company: {
    name: string,
    catchPhrase: string,
    bs: string
    }
}

describe('server data',  () => {
    let response: {data: Data[]};

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                    }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                    }
                    },
                    {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                    }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                    }
                    },
                    {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157",
                    "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                    }
                    },
                    "phone": "1-463-123-4447",
                    "website": "ramiro.info",
                    "company": {
                    "name": "Romaguera-Jacobson",
                    "catchPhrase": "Face to face bifurcated interface",
                    "bs": "e-enable strategic applications"
                    }
                    }
            ]
        }
    })

    test('getData', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve(response));
        const data = await getData();
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', '3'])
    })
})
