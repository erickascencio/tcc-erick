import { Iuser } from "../Iuser";

export class AaUser implements Iuser{

    email : string;
    nome: string;
    cidade: string;
    dataNascimento: Date;
    estado: string;
    sexo: string;
    telefone: string;
    fotoPerfil: string;
    descricao: string;
    prefSexual: string;
    limiteUsers: number;
    limiteSuperlike: number;
    limiteEvents: number;
    limiteDeslikes: number;
    limiteLikes: number;
    superLikesCount : number;
    likesCount : number;
    deslikesCount : number;
    eventsCount : number;
    usersCount : number;
    localidade : string;

    
    
    constructor(){      
        this.limiteUsers = 120;
        this.limiteSuperlike = 10;
        this.limiteEvents = 10;
        this.limiteDeslikes = 0;
        this.limiteLikes = 10000;
        this.superLikesCount = 0;
        this.likesCount = 0;
        this.deslikesCount = 0;
        this.eventsCount = 0;
        this.usersCount = 0;

        
    }

    public getNome() : string {
        return this.nome;
    }

    public setNome(nome : string) : void {
        this.nome = nome;
    }

    public getCidade() : string {
        return this.cidade;
    }

    public setCidade(cidade : string) : void {
        this.cidade = cidade;
    }

    public getDataNascimento() : Date {
        return this.dataNascimento;
    }

    public setDataNascimento(dataNascimento : Date) : void {
        this.dataNascimento = dataNascimento;
    }

    public getEstado() : string {
        return this.estado;
    }

    public setEstado(estado : string) : void {
        this.estado = estado;
    }

    public getSexo() : string {
        return this.sexo;
    }

    public setSexo(sexo : string) : void {
        this.sexo = sexo;
    }

    public getTelefone() : string {
        return this.telefone;
    }

    public setTelefone(telefone : string) : void {
        this.telefone = telefone;
    }

    public getFotoPerfil() : string {
        return this.fotoPerfil;
    }

    public setFotoPerfil(fotoPerfil : string) : void {
        this.fotoPerfil = fotoPerfil;
    }

    public getDescricao() : string {
        return this.descricao;
    }

    public setDescricao(descricao : string) : void {
        this.descricao = descricao;
    }

    public getPrefSexual() : string {
        return this.prefSexual;
    }

    public setPrefSexual(prefSexual : string) : void {
        this.prefSexual = prefSexual;
    }


    public getLimiteUsers() : number {
        return this.limiteUsers;
    }

    public setLimiteUsers(limiteUsers : number) : void {
        this.limiteUsers = limiteUsers;
    }

    public getLimiteSuperlike() : number {
        return this.limiteSuperlike;
    }

    public setLimiteSuperlike(limiteSuperlike : number) : void {
        this.limiteSuperlike = limiteSuperlike;
    }

    public getLimiteEvents() : number {
        return this.limiteEvents;
    }

    public setLimiteEvents(limiteEvents : number) : void {
        this.limiteEvents = limiteEvents;
    }

    public getLimiteDeslikes() : number {
        return this.limiteDeslikes;
    }

    public setLimiteDeslikes(limiteDeslikes : number) : void {
        this.limiteDeslikes = limiteDeslikes;
    }

    public getLimiteLikes() : number {
        return this.limiteLikes;
    }

    public setLimiteLikes(limiteLikes : number) : void {
        this.limiteLikes = limiteLikes;
    }

    public getSuperLikesCount() : number {
        return this.superLikesCount;
    }

    public setSuperLikesCount(superLikesCount : number) : void {
        this.superLikesCount = superLikesCount;
    }

    public getLikesCount() : number {
        return this.likesCount;
    }

    public setLikesCount(limiteLikes : number) : void {
        this.limiteLikes = limiteLikes;
    }

    public getDeslikesCount() : number {
        return this.deslikesCount;
    }

    public setDeslikesCount(deslikesCount : number) : void {
        this.deslikesCount = deslikesCount;
    }

    public getEventsCount() : number {
        return this.eventsCount;
    }

    public setEventsCount(eventsCount : number) : void {
        this.eventsCount = eventsCount;
    }
    
    public getUsersCount() : number {
        return this.usersCount;
    }

    public setUsersCount(usersCount : number) : void {
        this.usersCount = usersCount;
    }

    
    public getLocalidade () : string {
        return this.localidade;
    }

    public setLocalidade(localidade : string){ 
        this.localidade = localidade;
    }

    public getEmail() : string {
        return this.email;
    }

    public setEmail(email: string){
        this.email= email;
    }
}