import { StringLiteral } from "typescript";

export interface Product {
    type: string;
    name: string;
    price: number;
    details: string;
    imageSrc: string;
    image: File;
}