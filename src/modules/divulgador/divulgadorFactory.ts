import { Idivulgador } from "./Idivulgador";
import { DivulgadorPf } from "./models/divulgadorPf.model";
import { DivulgadorPj } from "./models/divulgadorPj.model";

export class DivulgadorFactory {
    static createUser(nivel : string) : Idivulgador{
        switch(nivel){
            case 'pf':
                return new DivulgadorPf();
            case 'pj':
                return new DivulgadorPj();
            default:
                throw new Error('Tipo de divulgador desconhecido.');         
        }        
    }
}