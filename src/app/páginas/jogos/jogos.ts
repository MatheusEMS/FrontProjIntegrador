export class jogos{
  idJogo: string | undefined;
  nomeJogo: string | undefined;
  capa:string | undefined;
  constructor( idJogo?: string,nomeJogo?:string,capa?: string) {
    this.idJogo = idJogo;
    this.nomeJogo = nomeJogo;
    this.capa = capa;
  }
}
