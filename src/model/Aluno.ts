/**
 * Classe que representa um aluno.
 */
export class Aluno {

  /* Atributos */
  /* Identificador do aluno */
  private idAluno: number = 0;
  /* Registro do aluno */
  private ra: string = "";
  /* nome do aluno */
  private nome: string;
  /* Sobrenome do aluno */
  private sobrenome: string;
  /* Data de nascimento do aluno */
  private dataNascimento: Date;
  /* Endereço do aluno*/
  private endereco: string;
  /* E-mail do aluno */
  private email: string;
  /*Celular do aluno */
  private celular: string;


  /**
   * Construtor da classe Aluno
   * 
   * @param nome Nome do aluno
   * @param sobrenome Sobrenome do aluno
   * @param dataNascimento Data de nascimento do aluno
   * @param endereco Endereço do aluno
   * @param email E-mail do aluno
   * @param celular Celular do aluno
   */
  constructor(
      nome: string,
      sobrenome: string,
      dataNascimento: Date,
      endereco: string,
      email: string,
      celular: string
  ) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
      this.endereco = endereco;
      this.email = email;
      this.celular = celular;
  }

  /* Métodos get e set */
  /**
   * Recupera o identificador do aluno
   * @returns o identificador do aluno
   */
  public getIdAluno(): number {
      return this.idAluno;
  }

  /**
   * Atribui um valor ao identificador do aluno
   * @param idAluno novo identificado do aluno
   */
  public setIdAluno(idAluno: number): void {
      this.idAluno = idAluno;
  }

  /**
   * Retorna o ra do aluno.
   *
   * @returns {string} O registo do aluno.
   */
  public getRa(): string {
      return this.ra;
  }

  /**
   * Define o registro do aluno.
   * 
   * @param ra - O registro do aluno a ser definida.
   */
  public setRa(ra: string): void {
      this.ra = ra;
  }

  /**
   * Retorna o nome do aluno.
   *
   * @returns {string} O nome do aluno.
   */
  public getNome(): string {
      return this.nome;
  }

  /**
   * Define o nome do aluno.
   *
   * @param nome - O nome do aluno.
   */
  public setAluno(nome: string): void {
      this.nome = nome;
  }

  /**
   * Retorna o sobrenome do aluno.
   *
   * @returns O sobrenoe do aluno.
   */
  public getSobrenome(): string {
      return this.sobrenome;
  }

  /**
   * Define o sobrenome do aluno.
   * 
   * @param sobrenome - O sobrenome do aluno a ser definido.
   */
  public setAno(sobrenome: string): void {
      this.sobrenome = sobrenome;
  }

  /**
   * Retorna a data de nascimento do aluno.
   *
   * @returns {string} A data de nascimento do aluno.
   */
  public getDataNascimento(): Date {
  return this.dataNascimento;
  }

  /**
   * Define a data de nascimento do aluno.
   * 
   * @param dataNascimento - A data de nascimento do aluno.
   */
  public setDataNascimento(dataNascimento: Date): void {
      this.dataNascimento = dataNascimento;
  }


  /**
   * Retorna o endereco do aluno.
   *
   * @returns {string} O endereço do aluno.
   */
  public getEndereco(): string {
  return this.endereco;
  }

  /**
  * Define o endereço do aluno.
  *
  * @param endereco - O endereço do aluno.
  */
  public setEndereco(endereco: string): void {
      this.endereco = endereco;
  }

  /**
   * Retorna o email do aluno.
   *
   * @returns {string} O email do aluno.
  */
  public getEmail(): string {
  return this.email;
  }
  
  /**
  * Define o e-mail do aluno.
  *
  * @param email - O e-mail do aluno.
  */
  public setEmail(email: string): void {
      this.email = email;
  }

  /**
  * Retorna o celular do aluno.
  *
  * @returns {string} O celular do aluno.
  */
  public getCelular(): string {
  return this.celular;
  }
      
  /**
  * Define o celular do aluno.
  *
  * @param celular - O celular do aluno.
  */
  public setCelular(celular: string): void {
      this.celular = celular;
  }
}