type Card = () => void;

type CardDel = (index:number, id:number) => void;

export interface PropsAdd {
    onUp: Card
}

export interface CardsV {
    items: Array<Items>,
    onDelete: CardDel
}

export interface Items {
    content: string,
    id: number
}

