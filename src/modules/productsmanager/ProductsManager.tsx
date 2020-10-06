import React, {  } from 'react';
import { IRedirectProps } from '../../models/redirect/IRedirectProps';
import { AddProduct } from './AddProduct';

interface IProductsManagerProps extends IRedirectProps{
    
}

export const ProductsManager: React.FC<IProductsManagerProps> = (props) => {
    return (
        <>
            <AddProduct goToModule={props.goToModule}/>
        </>
    );
}