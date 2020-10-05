import React from "react";
import { Container } from "react-bootstrap";
import { AddProduct } from "./modules/productsmanager/AddProduct";

export const AviationStoreAdmin: React.FC = () => {
    return(
        <Container>
            <AddProduct/>
        </Container>
    );
}