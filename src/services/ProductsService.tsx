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

    static deleteProduct(thisProductId: string): Promise<void> {
        return db.collection('products').doc(thisProductId).delete();
    }

    static async getProduct(identifier: number) {

    }

    static async getProducts(): Promise<Product[]> {
        return await this.getDocumentsWithId('products') as Product[];
    }

    static async addProductType(newProductType: ProductType) {
        const {id, ...productTypeToAdd} = {...newProductType}
        return db.collection('productTypes').add(productTypeToAdd);
    }

    static deleteProductType(thisProductTypeId: string): Promise<void> {
        return db.collection('productTypes').doc(thisProductTypeId).delete();
    }

    static async getProductTypes(): Promise<ProductType[]> {
        return await this.getDocumentsWithId('productTypes') as ProductType[];
    }

    // Get docs along their id since there is no other way to get properties together
    private static async getDocumentsWithId(name: string): Promise<any[]>{
        return (await db.collection(name).get())
        .docs.map(doc => {
            const id = doc.id;
            const data = doc.data();
            return Object.assign({id}, {...data})
        })
    }
}