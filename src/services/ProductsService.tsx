import { Product } from "../models/Product";
import { ProductType } from "../models/ProductType";
import { db, storage } from "./firebase";

export class ProductsService {

    private static productImagesRef: string = 'productImages';

    static addProduct(newProduct: Product) {
        // First upload image to get URL which is stored along the product properties
        const uploadTask = storage
            .ref(`${this.productImagesRef}/${newProduct.image.name}`)
            .put(newProduct.image);
        // Add Product once the image is uploaded
        uploadTask.on(
            'state_changed',
            snapshot => { },
            error => { throw error; },
            () => {
                return storage
                .ref(`${this.productImagesRef}`)
                .child(newProduct.image.name)
                .getDownloadURL()
                .then(url => {
                    newProduct.imageSrc = url;
                    const {image, ...productToAdd} = {...newProduct};
                    db.collection('products')
                    .add(productToAdd)
                    .catch(err => {
                        console.error(err);
                        alert('Ocurrió un error');
                    });
                });
            }
        )
    }

    static uploadImage(newImage: any) {
    }

    static modifyProduct(thisProduct: Product) {

    }

    static deleteProduct(thisProduct: Product) {

    }

    static async getProduct(identifier: number) {

    }

    static async getProducts(): Promise<Product[]> {
        const snapshot = db.collection('products').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as Product[];
        return docs;
    }

    static async addProductType(newProductType: ProductType) {
        return db.collection('productTypes').add(newProductType);
    }

    static async getProductTypes() {
        const snapshot = db.collection('productTypes').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as ProductType[];
        return docs;
    }
}