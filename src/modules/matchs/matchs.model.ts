export class Matchs {
    
    userId: string;
    userId2: string;
    eventId: string;
    dataMatch: Date;
    matchId: string;

    constructor(){}

    public getUserId(): string{
        return this.userId;
    }

    public setUserId(userId: string){
        this.userId = userId;
    }

    public getUserId2(): string{
        return this.userId2;
    }

    public setUserId2(userId2: string){
        this.userId2 = userId2;
    }

    public getEventId(): string{
        return this.eventId;
    }

    public setEventId(eventId: string){
        this.eventId = eventId;
    }

    public getDataMatch(): Date{
        return this.dataMatch;
    }

    public setDataMatch(dataMatch: Date){
        this.dataMatch = dataMatch;
    }

    public getMatchId(): string{
        return this.matchId;
    }

    public setMatchId(matchId: string){
        this.matchId = matchId;
    }

}