import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { Product } from '../../models/Product';
import { ProductsService } from "../../services";

interface IAddProductProps{

}

export const AddProduct: React.FC<IAddProductProps> = (props) => {

    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [price, setPrice] = useState<number|undefined>();
    const [details, setDetails] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string>('');

    function handleNameChange(event: any){
        setName(event.target.value);
    }
    function handleTypeChange(event: any){
        setType(event.target.value);
    }
    function handlePriceChange(event: any){
        setPrice(event.target.value);
    }
    function handleDetailsChange(event: any){
        setDetails(event.target.value);
    }
    function handleImageSrcChange(event: any){
        setImageSrc(event.target.value);
    }

    function resetModel(){
        setName('');
        setType('');
        setPrice(undefined);
        setDetails('');
        setImageSrc('');
    }

    function validModel(){
        return (
            [name.trim(), type.trim()].indexOf('') < 0
            && price && price >= 0
        );
    }
    
    function onsubmit(){
        if(validModel()){
            const thisproduct: Product = {
                name: name,
                type: type,
                price: price!,
                details: details,
                imageSrc: imageSrc,
            };
            ProductsService.addProduct(thisproduct)
            .then(() => {
                resetModel();
                alert('Producto publicado');
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
        <Form>
            <Form.Group controlId="form.Name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="" value={name} onChange={handleNameChange}/>
            </Form.Group>
            
            <Form.Group controlId="form.Type">
                <Form.Label>Categoría</Form.Label>
                <Form.Control type="text" placeholder="" value={type} onChange={handleTypeChange} />
            </Form.Group>

            <Form.Group controlId="form.Price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="" value={price} onChange={handlePriceChange} />
                <Form.Text className="text-muted">
                El precio es en colones
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="form.Details">
                <Form.Label>Detalles</Form.Label>
                <Form.Control type="text" placeholder="" value={details} onChange={handleDetailsChange} />
            </Form.Group>

            <Form.Group controlId="form.ImageSrc">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" placeholder="" value={imageSrc} onChange={handleImageSrcChange} />
                <Form.Text className="text-muted">
                URL de la imagen a mostrar
                </Form.Text>
            </Form.Group>

            <Button variant="primary" onClick={onsubmit}>
                Publicar
            </Button>
        </Form>
    );
}