export interface Idivulgador {

    divId: string;
    cidade: string;
    estado: string;
    email: string;
    endereco: string;
    descricaoProf: string;

    getDivId(): string; 
    setDivId(divId: string): void;
    getCidade(): string;
    setCidade(cidade: string): void;
    getEstado(): string;
    setEstado(estado: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getEndereco(): string;
    setEndereco(endereco: string): void;
    getDescricaoProf(): string;
    setDescricaoProf(descricaoProf: string): void;


}