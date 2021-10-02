export interface ICoupom {
    code: string;
    discount: number;
}

export class Coupom implements ICoupom
{
    constructor(readonly code: string, readonly discount: number) {}
}