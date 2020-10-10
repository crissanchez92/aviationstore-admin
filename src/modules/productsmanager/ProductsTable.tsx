import React, {  } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services';

interface IProductsTableProps{
    products: Product[];
    reloadData: () => void;
}

export const ProductsTable: React.FC<IProductsTableProps> = (props) => {

    function onDeleteAction(event: any){
        ProductsService.deleteProduct(event.target.id)
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
                {props.products.map((product, index) => {
                    return(
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.details}</td>
                            <td>
                                <Button onClick={() => alert('Acción en Progreso')}>Editar</Button>
                                <Button id={product.id} onClick={onDeleteAction}>Eliminar</Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
    );
}