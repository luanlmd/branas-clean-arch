export interface IItem {
    id: number;
    title: string;
    description: string;
    quantity: number;
    price: number;
}

export class Item {
    private static items: IItem[] = [
        {
            id: 1,
            title: 'Item 1',
            description: 'Description 1',
            quantity: 5, 
            price: 10
        },
        {
            id: 2,
            title: 'Item top 2',
            description: 'Top description',
            quantity: 3,
            price: 20
        },
        {
            id: 3,
            title: 'Awesome item 3',
            description: 'Top description',
            quantity: 3,
            price: 30
        },
        {
            id: 4,
            title: 'Item top 2',
            description: 'Top description',
            quantity: 3,
            price: 40
        },
        {
            id: 5,
            title: 'Item top 2',
            description: 'Top description',
            quantity: 3,
            price: 50
        }
    ]
    
    static getById(id: number): IItem {
        const item = this.items.find((item) => item.id == id);
        if (!item) { throw new Error('Item not found'); }
        return item;
    }
}