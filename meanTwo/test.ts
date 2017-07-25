const myStr = 'string';
const myNum = 34;

let index: number;

const array: boolStringNum[] = [1, '2'];

const first = <number>array[0]

type boolStringNum = number | boolean | string;

class User implements IUser {
    username: string;
    email: string;
    password: string;
}

interface IUser extends ILogin {
    username: string;
}

interface ILogin {
    email: string;
    password: string;
}

class Person extends User implements IUser {
    name: string;
}

function add(num1: number, num2: number): number {
    return num1 + num2 
}

function map<T, TResult>(array: T[], callback: (element: T, index?: number) => TResult): TResult[] {
    const results: TResult[] = [];

    for(let index = 0; index < array.length; index++) {
        results.push(callback(array[index], index));
    }

    return results;
}

function filter<T>(array: T[], callback: (element: T, index?: number) => boolean): T[] {
    const results: T[] = []

    for(let index = 0; index < array.length; index++) {
        if (callback(array[index], index)) {
            results.push(array[index])
        }
    }
    return results;
}


const stringArray: string[] = ['1', 'cat', '2', '3', '4', '5', 'dog', '6'];
const numberArray: number[] = filter(map(stringArray, element => parseInt(element, 10)), element => !isNaN(element));


console.log(numberArray);
