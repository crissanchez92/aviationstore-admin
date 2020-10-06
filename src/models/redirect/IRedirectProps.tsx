import { ModuleSelection } from "./ModuleSelection";

export interface IRedirectProps {
    goToModule: (module: ModuleSelection) => void;
}