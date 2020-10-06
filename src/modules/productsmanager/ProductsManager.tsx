import React, {  } from 'react';
import { IRedirectProps } from '../../models/redirect/IRedirectProps';
import { AddProductType } from './AddProductType';

interface IProductsManagerProps extends IRedirectProps{

}

export const ProductsManager: React.FC<IProductsManagerProps> = (props) => {
    return (
        <>
            <AddProductType goToModule={props.goToModule}/>
        </>
    );
}