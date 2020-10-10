import React, { useEffect, useState } from 'react';
import { Product } from '../../models/Product';
import { IRedirectProps } from '../../models/redirect/IRedirectProps';
import { ProductsService } from '../../services';
import { AddProduct } from './AddProduct';
import { ProductsTable } from './ProductsTable';

interface IProductsManagerProps extends IRedirectProps{
    
}

export const ProductsManager: React.FC<IProductsManagerProps> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);

    function loadProducts(){
        ProductsService.getProducts()
        .then((theProducts: Product[]) => {
            setProducts(theProducts);
        })
        .catch(err => {
            alert('Ocurrió un error');
            console.error(err);
        })
    }

    useEffect(() => {
        loadProducts();
    },[]);

    return (
        <>
            <AddProduct goToModule={props.goToModule}/>
            <br/>
            <ProductsTable products={products} reloadData={loadProducts}/>
        </>
    );
}