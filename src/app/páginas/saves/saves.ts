export class Saves {
  id_save: string | undefined;
  descricao: string | undefined;
  resumo: string | undefined;
  emuladores: string | undefined;
  arquivo: string | undefined;
  habilitado: string | undefined;
  data_Hora: Date | undefined;
  requisicao_nomeJogo: string | undefined;
  idUsuario: string | undefined;
  idJogo: string | undefined;
  idConsole: string | undefined;

  constructor(
    id_save?: string,
    descricao?: string,
    resumo?: string,
    emuladores?: string,
    arquivo?: string,
    habilitado?: string,
    data_Hora?: Date,
    requisicao_nomeJogo?: string,
    idUsuario?: string,
    idJogo?: string,
    idConsole?: string,
  ) {
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
  }
}
