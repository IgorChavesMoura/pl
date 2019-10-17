import { Injectable } from '@angular/core';
import { Institute, Secretary } from '../models/Institute';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  secretaries: Secretary[] = [
    { id:1, name:"Secretaria de Saúde" } as Secretary,
    { id:2, name:"Secretaria de Educação" } as Secretary,
    { id:3, name:"Secretaria de Meio Ambiente" } as Secretary,
    { id:4, name:"Secretaria de Infraestrutura" } as Secretary,
  ]


  institutes:Institute[] = [
    { id:1, name:'Prefeitura Municipal de Ocara', secretaries: [
      
      this.getSecretaryById(1),
      this.getSecretaryById(2),

    ] } as Institute,
    { id:2, name:'Prefeitura Municipal de Tabuleiro do Norte', secretaries: [
 
      this.getSecretaryById(3),
      this.getSecretaryById(4),

    ]} as Institute

  ];

  

  constructor() { }


  getAllInstitutes(){

    return [].concat(this.institutes);

  }

  getInstituteById(id){

    let institute = undefined;

    this.institutes.forEach(
      i => {

        if(i.id == id){

          institute = Object.assign({},i);

        }

      }
    );

    return institute;


  }

  getInstituteSecretaries(id){

    let secretaries = undefined;

    this.institutes.forEach(
      i => {

        if(i.id == id){

          secretaries = [].concat(i.secretaries);

        }

      }
    );

    return secretaries;

  }

  getSecretaryById(id){

    let secretary = undefined;

    this.secretaries.forEach(
      s => {

        if(s.id == id){

          secretary = Object.assign({},s);

        }

      }
    );


    return secretary;

  }

  getPublicationById(id){

    let publication = undefined;



    return publication;


  }

}
