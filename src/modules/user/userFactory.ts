import { Iuser } from "./Iuser";
import { AaUser } from "./models/AaUser.model";
import { User } from "./models/user.model";
import { VipUser } from "./models/vipUser.model";

export class UserFactory {
    static createUser(nivel : string) : Iuser{
        switch(nivel){
            case 'comum':
                return new User();
            case 'vip':
                return new VipUser();
            case 'allaccess':
                return new  AaUser();
            default:
                throw new Error('Nivel de Assinatura desconhecido');         
        }        
    }
}