import axios from "axios";

export function positiveSum(numbers: number[]): number {
    return numbers.filter((number) => number >= 0).reduce((acc, current) => acc + current, 0);
  }

export function repeatStr(repeatNumber: number, string: string) {
    return new Array(repeatNumber).fill(string).join('');
}

export function boolToWord(boolean: boolean) {
  return boolean ? 'Да' : 'Нет';
}

export const promiseFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000)
  })
}

export const manyTimeouts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //
    }, 1000)
    setTimeout(() => {
      //
    }, 2000)
    setTimeout(() => {
      //
    }, 3000)
    setTimeout(() => {
      //
    }, 4000)
    setTimeout(() => {
      resolve('ok');
    }, 5000)
  })
  

}

export const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data: any[] = response.data;
    const userIds = data.map(({id}) => `${id}`);
    return userIds;
  } catch (e) {

  }
}

export const getFetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data
}