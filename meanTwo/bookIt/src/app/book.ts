export class Book {
    id: number;
    title: string;
    year: number;
    pages: number;
    author: string;
    publisher: string;

    constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }

}
