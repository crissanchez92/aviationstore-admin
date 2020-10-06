import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ProductType } from '../../models/ProductType';
import { IRedirectProps } from '../../models/redirect/IRedirectProps';
import { ModuleSelection } from '../../models/redirect/ModuleSelection';
import { ProductsService } from '../../services';
import { ProductTypesTable } from './';

interface IAddProductTypeProps extends IRedirectProps{
    
}

export const AddProductType: React.FC<IAddProductTypeProps> = (props) => {
    
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    
    const [name, setName] = useState<string>('');
    const [details, setDetails] = useState<string>('');

    function loadProductTypes(){
        ProductsService.getProductTypes()
        .then((theProductTypes: ProductType[]) => {
            setProductTypes(theProductTypes);
        })
        .catch(err => {
            alert('Ocurrió un error');
            console.log(err);
        })
    }

    useEffect(() => {
        loadProductTypes();
    },[]);

    function handleNameChange(event: any){
        setName(event.target.value);
    }
    function handleDetailsChange(event: any){
        setDetails(event.target.value);
    }

    function resetModel(){
        setName('');
        setDetails('');
    }

    function validModel(){
        return (name.trim() !== '');
    }
    
    function onsubmit(){
        if(validModel()){
            const thisproducttype: ProductType = {
                name: name,
                details: details,
            };
            ProductsService.addProductType(thisproducttype)
            .then(() => {
                resetModel();
                loadProductTypes();
            })
            .catch(err => {
                alert('Ocurrió un error');
                console.log(err);
            });
        }
        else{
            alert('Datos no válidos');
        }
    }
    
    return(
        <>
            <Form>
                <h2>Agregar nueva categoría</h2>
                <hr/>
                <Form.Group controlId="form.Name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="" value={name} onChange={handleNameChange}/>
                </Form.Group>
                
                <Form.Group controlId="form.Details">
                    <Form.Label>Detalles</Form.Label>
                    <Form.Control type="text" placeholder="" value={details} onChange={handleDetailsChange} />
                </Form.Group>

                <Button variant="secondary" onClick={() => {props.goToModule(ModuleSelection.home)}}>
                    Regresar
                </Button>

                <Button variant="primary" onClick={onsubmit}>
                    Publicar
                </Button>
            </Form>
            <br/>
            <ProductTypesTable productTypes={productTypes}/>
        </>
    );
}