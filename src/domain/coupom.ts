export interface ICoupom {
    code: string;
    discount: number;
    expiration: Date;

    isExpired: () => boolean;
}

export class Coupom implements ICoupom
{
    constructor(readonly code: string, readonly discount: number, readonly expiration: Date) {}

    public isExpired = () => {
        return this.expiration.getTime() < new Date().getTime();
    }
}