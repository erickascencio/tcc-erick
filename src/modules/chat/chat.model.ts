interface Mensagem {
    nomeRemetente: string;
    texto: string;
    dataHora: Date;
    status: 'enviada' | 'recebida' | 'lida';
}

export class Chat {

    private chatId: string;
    private mensagens : Mensagem[];

    public getChatId() : string{
        return this.chatId;
    }  

    public setChatId(chatId : string){
        this.chatId=chatId;
    }   

    public getMensagens() : Mensagem[]{
        return this.mensagens;
    }

    public addMensagem(mensagem: Mensagem){
        this.mensagens.push(mensagem);
    }	
}