import React, { } from 'react';
import { Button, Jumbotron } from'react-bootstrap';
import { IRedirectProps } from "../models/redirect/IRedirectProps";
import { ModuleSelection } from '../models/redirect/ModuleSelection';

interface IHomeProps extends IRedirectProps {
    
}

export const Home: React.FC<IHomeProps> = (props) => {
    
    function gotoManageProducts(){
        props.goToModule(ModuleSelection.productsManager);
    }

    function gotoManageProductTypes(){
        props.goToModule(ModuleSelection.productTypesManager);
    }

    return (
        <>
            <Jumbotron>
                <h1>Administrar Productos</h1>
                <p>
                    En este módulo se agrega, edita y elimina productos.
                </p>
                <p>
                    <Button variant="primary" onClick={gotoManageProducts}>Administrar</Button>
                </p>
            </Jumbotron>


            <Jumbotron>
                <h1>Administrar Categorías</h1>
                <p>
                    En este módulo se agrega, edita y elimina categorías de productos.
                </p>
                <p>
                    <Button variant="primary" onClick={gotoManageProductTypes}>Administrar</Button>
                </p>
            </Jumbotron>
        </>
    );
}