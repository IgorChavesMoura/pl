import { User } from './User';
import { Publication } from './Publication';

export class Institute {

    id:number;

    name:string;

    users:User[] = [];

    secretaries: Secretary[] = [];

   


}

export class Secretary {

    id:number;

    name:string;

    publications:Publication[] = [];

}

