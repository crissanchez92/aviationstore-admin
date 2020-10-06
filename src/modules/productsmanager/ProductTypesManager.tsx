import React, { useEffect, useState } from 'react';
import { ProductTypesTable } from '.';
import { ProductType } from '../../models/ProductType';
import { IRedirectProps } from '../../models/redirect/IRedirectProps';
import { ProductsService } from '../../services';
import { AddProductType } from './AddProductType';

interface IProductTypesManagerProps extends IRedirectProps {

}

export const ProductTypesManager: React.FC<IProductTypesManagerProps> = (props) => {    
    
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);

    function loadProductTypes(){
        const productTypes = ProductsService.getProductTypes()
        .then((theProductTypes: ProductType[]) => {
            setProductTypes(theProductTypes);
        })
    }

    useEffect(() => {
        loadProductTypes();
    },[]);

    return (
        <>
            <AddProductType goToModule={props.goToModule} loadProductTypes={loadProductTypes}/>
            <br/>
            <ProductTypesTable productTypes={productTypes}/>
        </>
    );
}