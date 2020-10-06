import React, {  } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ProductType } from '../../models/ProductType';

interface IProductTypesTableProps{
    productTypes: ProductType[]
}

export const ProductTypesTable: React.FC<IProductTypesTableProps> = (props) => {
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
                                <Button onClick={() => alert('Acción en Progreso')}>Eliminar</Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
    );
}