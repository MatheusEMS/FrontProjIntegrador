export class Usuario{
  id: string | undefined;
  token: string | undefined;
  nome: string | undefined;
  email: string | undefined;
  senha: string | undefined;
  admin: string | undefined;
  constructor( id?: string,email?: string, senha?: string, admin?: string,token?: string ,nome?:string) {
    this.id = id;
    this.email = email;
    this.senha = senha;
    this.admin = admin;
    this.token = token;
    this.nome = nome;
  }
}
