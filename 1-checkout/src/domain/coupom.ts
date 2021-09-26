export interface ICoupom {
    code: string;
    discount: number;
}

export class Coupom
{
    private static coupoms: ICoupom[] = [
        {
            code: 'disc1',
            discount: 1
        },
        {
            code: 'disc2',
            discount: 2.5
        },
        {
            code: 'disc10',
            discount: 10
        },
        {
            code: 'disc15',
            discount: 15.5
        },
        {
            code: 'disc20',
            discount: 20.
        }
    ]

    static getByCode(code: string) {
        const coupom = this.coupoms.find(c => c.code === code)
        if (!coupom) { throw new Error('Coupom not found') }
        return coupom;
    }
}