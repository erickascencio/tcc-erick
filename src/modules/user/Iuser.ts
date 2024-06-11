export interface Iuser {
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
    matchesCount : number;
    likesCount : number;
    deslikesCount : number;
    eventsCount : number;
    

    getSuperLikesCount(): number;
    setSuperLikesCount(superLikesCount: number): void;
    getNome(): string;
    setNome(nome: string): void;
    getCidade(): string;
    setCidade(cidade: string): void;
    getDataNascimento(): Date;
    setDataNascimento(dataNascimento: Date): void;
    getEstado(): string;
    setEstado(estado: string): void;
    getSexo(): string;
    setSexo(sexo: string): void;
    getTelefone(): string;
    setTelefone(telefone: string): void;
    getFotoPerfil(): string;
    setFotoPerfil(fotoPerfil: string): void;
    getDescricao(): string;
    setDescricao(descricao: string): void;
    getPrefSexual(): string;
    setPrefSexual(prefSexual: string): void;
    getLimiteMatch(): number;
    setLimiteMatch(limiteMatch: number): void;
    getLimiteUsers(): number;
    setLimiteUsers(limiteUsers: number): void;
    getLimiteSuperlike(): number;
    setLimiteSuperlike(limiteSuperlike: number): void;
    getLimiteEvents(): number;
    setLimiteEvents(limiteEvents: number): void;
    getLimiteDeslikes(): number;
    setLimiteDeslikes(limiteDeslikes: number): void;
    getLimiteLikes(): number;
    setLimiteLikes(limiteLikes: number): void;

}