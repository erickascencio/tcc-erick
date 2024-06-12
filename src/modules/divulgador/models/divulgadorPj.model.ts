import { Idivulgador } from "../Idivulgador";


export class DivulgadorPj implements Idivulgador {
    divId: string;
    cidade: string;
    estado: string;
    email: string;
    endereco: string;
    cnpj: string;
    descricaoProf: string;
    nomeFantasia: string;
    razaoSocial: string;
    respPerfil: string;
    telefoneResp: string;
    telefone: string;
    

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

    public getNomeFantasia() : string{
        return this.nomeFantasia;
    }

    public setNomeFantasia(nomeFantasia: string){
        this.nomeFantasia= nomeFantasia;
    }

    public getCnpj() : string{
        return this.cnpj;
    }

    public setCnpj(cnpj: string){
        this.cnpj= cnpj;
    }

    public getTelefone() : string{
        return this.telefone;
    }

    public setTelefone(telefone: string){
        this.telefone= telefone;
    }

    public getTelefoneResp() : string{
        return this.telefoneResp;
    }

    public setTelefoneResp(telefoneResp: string){
        this.telefoneResp= telefoneResp;
    }

    public getRespPefil() : string{
        return this.respPerfil;
    }

    public setRespPefil(respPefil: string){
        this.respPerfil= respPefil;
    }

    public getRazaoSocial() : string{
        return this.razaoSocial;
    }

    public setRazaoSocial(razaoSocial: string){
        this.razaoSocial= razaoSocial;
    }

   
}