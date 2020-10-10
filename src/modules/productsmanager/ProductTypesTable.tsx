import React, {  } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ProductType } from '../../models/ProductType';
import { ProductsService } from '../../services';

interface IProductTypesTableProps{
    productTypes: ProductType[];
    reloadData: () => void;
}

export const ProductTypesTable: React.FC<IProductTypesTableProps> = (props) => {

    function onDeleteAction(event: any){
        ProductsService.deleteProductType(event.target.id)
        .then(() => {
            props.reloadData()
        })
        .catch(err => {
            console.error(err);
            alert('Ocurrió un error');
        });
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Detalles</th>
                <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {props.productTypes.map((productType, index) => {
                    return(
                        <tr key={index}>
                            <td>{productType.name}</td>
                            <td>{productType.details}</td>
                            <td>
                                <Button onClick={() => alert('Acción en Progreso')}>Editar</Button>
                                <Button id={productType.id} onClick={onDeleteAction}>Eliminar</Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
    );
}