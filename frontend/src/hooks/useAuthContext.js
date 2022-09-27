import { useContext } from 'react';
import {AuthContext} from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    if(!context) {
        throw Error('Le contexte de l\'utilisateur doit être utiliser à l\'intérieur du provider du contexte');
    }

    return context;
}
