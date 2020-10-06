import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import { ModuleSelection } from "./models/redirect/ModuleSelection";
import { AddProduct, AddProductType } from "./modules/productsmanager";

export const AviationStoreAdmin: React.FC = () => {
    const [module, setModule] = useState<ModuleSelection>(ModuleSelection.home)

    function changeModule(theModule: ModuleSelection){
        setModule(theModule);
    }

    return(
        <Container>
            {module === ModuleSelection.home && <Home goToModule={changeModule}/>}
            {module === ModuleSelection.productsManager && <AddProduct goToModule={changeModule}/>}
            {module === ModuleSelection.productTypesManager && <AddProductType goToModule={changeModule}/>}
        </Container>
    );
}