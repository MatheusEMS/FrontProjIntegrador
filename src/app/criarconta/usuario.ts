export class Usuario{
  id: string | undefined;
  nome: string | undefined;
  token: string | undefined;
  email: string | undefined;
  senha: string | undefined;
  admin: string | undefined;
  constructor( id?: string,nome?: string,email?: string, senha?: string, admin?: string,token?: string ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.admin = admin;
    this.token = token;
  }
}
