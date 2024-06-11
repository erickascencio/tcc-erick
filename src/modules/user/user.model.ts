export class user {

    private cidade : string;
    private dataNascimento : Date;
    private estado : string;
    private nome : string;
    private sexo : string;
    private telefone : string;
    private fotoPerfil : string;
    private descricao : string;
    private prefSexual : string;
    private limiteMatch : number;
    private limiteUsers : number;
    private limiteSuperlike : number;
    private limiteEvents : number;
    private limiteDeslikes : number;
    private limiteLikes: number;
    
    constructor(cidade : string, dataNascimento : Date, estado : string, nome : string, sexo : string, telefone : string){
        this.cidade = cidade;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.nome = nome;
        this.sexo = sexo;
        this.telefone = telefone;
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

    public getLimiteMatch() : number {
        return this.limiteMatch;
    }

    public setLimiteMatch(limiteMatch : number) : void {
        this.limiteMatch = limiteMatch;
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

    

}