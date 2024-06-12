export class Event {
    private data: Date;
    private eventId: string;
    private nome: string;
    private descricao: string;
    private local: string;
    private imgEvento: string;
    private loteIngresso: string;
    private valorIngresso: string;

    constructor(){}

    public getData(): Date{
        return this.data;
    }

    public setData(data: Date){
        this.data= data;
    }

    public getEventId(): string{
        return this.eventId;
    }

    public setEventId(eventId: string){
        this.eventId = eventId;
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getDescricao(): string{
        return this.descricao;
    }

    public setDescricao(descricao: string){
        this.descricao = descricao;
    }

    public getLocal(): string{
        return this.local;
    }

    public setLocal(local: string){
        this.local = local;
    }

    public getImgEvento(): string{
        return this.imgEvento;
    }

    public setImgEvento(imgEvento: string){
        this.imgEvento = imgEvento;
    }

    public getLoteIngresso(): string{
        return this.loteIngresso;
    }

    public setLoteIngresso(loteIngresso: string){
        this.loteIngresso = loteIngresso;
    }

    public getValorIngresso(): string{
        return this.valorIngresso;
    }

    public setValorIngresso(valorIngresso: string){
        this.valorIngresso = valorIngresso;
    }

    
}