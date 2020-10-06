import { Product } from "../models/Product";
import { ProductType } from "../models/ProductType";
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

    static async addProductType(newProductType: ProductType){
        return db.collection('productTypes').add(newProductType);
    }

    static async getProductTypes(){
        const snapshot = db.collection('productTypes').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as ProductType[];
        return docs;
    }
}