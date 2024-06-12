import { Idivulgador } from "../Idivulgador";


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

    public getEstado() : string{
        return this.estado;
    }

    public setEstado(estado: string){
        this.estado= estado;
    }

    public getEmail() : string{
        return this.email;
    }

    public setEmail(cidade: string){
        this.cidade= cidade;
    }

    public getEndereco() : string{
        return this.endereco;
    }

    public setEndereco(endereco: string){
        this.endereco= endereco;
    }

    public getDescricaoProf() : string{
        return this.descricaoProf;
    }

    public setDescricaoProf(descricaoProf: string){
        this.descricaoProf= descricaoProf;
    }

    public getNome() : string{
        return this.nome;
    }

    public setNome(nome: string){
        this.nome= nome;
    }

    public getCpf() : string{
        return this.cpf;
    }

    public setCpf(cpf: string){
        this.cpf= cpf;
    }

    public getDataNasc() : Date{
        return this.dataNasc;
    }

    public setDataNasc(dataNasc: Date){
        this.dataNasc= dataNasc;
    }



}