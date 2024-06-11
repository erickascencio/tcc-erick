import { Idivulgador } from "../Idivulgador";
import { Controller } from '@nestjs/common';

export class DivulgadorPf implements Idivulgador {
    divId: string;
    cidade: string;
    estado: string;
    email: string;
    endereco: string;
    descricaoProf: string;
    nome: string;
    cpf: string;
    dataNasc: Date;

    constructor (){

    }

    public getDivId() : string{
        return this.divId;
    }

    public setDivId(divId : string){
        this.divId=divId;
    }

    public getCidade() : string{
        return this.cidade;
    }

    public setCidade(cidade: string){
        this.cidade= cidade;
    }





}