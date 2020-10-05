import { Product } from "../models/Product";
import { db } from "./firebase";

export class ProductsService {
    static addProduct(newProduct: Product){
        return db.collection('products').add(newProduct);
    }

    static modifyProduct(thisProduct: Product){

    }

    static deleteProduct(thisProduct: Product){

    }

    static async getProduct(identifier: number){

    }

    static async getProducts(): Promise<Product[]> {
        const snapshot = db.collection('products').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as Product[];
        return docs;
    }
}