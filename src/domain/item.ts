export interface IItem {
    id: number;
    title: string;
    description: string;
    price: number;

    weight: number;
    height: number;
    width: number;
    length: number;

    getCubage: () => number;
    getDensity: () => number;
}

export class Item implements IItem {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly description: string,
        readonly price: number,
        readonly weight: number,
        readonly height: number,
        readonly width: number,
        readonly length: number) {}

    getCubage() {
        return (this.length * this.height * this.width) / 1000000;
    }

    getDensity() {
        return Math.round((this.weight/1000) / this.getCubage())
    }
}