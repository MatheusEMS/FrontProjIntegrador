export class SavesReq {
  id_save: string | undefined;
  descricao: string | undefined;
  resumo: string | undefined;
  emuladores: string | undefined;
  arquivo: string | undefined;
  habilitado: string | undefined;
  data_Hora: Date | undefined;
  requisicao_nomeJogo: string | undefined;
  idUsuario: string | undefined;
  nomeUsuario: string | undefined;
  idJogo: string | undefined;
  nomeJogo: string | undefined;
  idConsole: string | undefined;
  nomeConsole: string | undefined;

  constructor(id_save?: string, descricao?: string, resumo?: string, emuladores?: string, arquivo?: string,
              habilitado?: string, data_Hora?: Date, requisicao_nomeJogo?: string, idUsuario?: string, idJogo?: string,
              idConsole?: string, nomeUsuario?: string, nomeJogo?: string, nomeConsole?: string) {
    this.id_save = id_save;
    this.descricao = descricao;
    this.resumo = resumo;
    this.emuladores = emuladores;
    this.arquivo = arquivo;
    this.habilitado = habilitado;
    this.data_Hora = data_Hora;
    this.requisicao_nomeJogo = requisicao_nomeJogo;
    this.idUsuario = idUsuario;
    this.idJogo = idJogo;
    this.idConsole = idConsole;
    this.nomeUsuario = nomeUsuario;
    this.nomeJogo = nomeJogo;
    this.nomeConsole = nomeConsole;
  }
}
