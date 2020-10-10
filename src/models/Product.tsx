export interface Product {
    id: string|undefined;
    type: string;
    name: string;
    price: number;
    details: string;
    imageSrc: string;
    image: File;
}