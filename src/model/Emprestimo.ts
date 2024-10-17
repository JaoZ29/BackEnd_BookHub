/**
 * Classe que representa um emprestimo.
 */
export class Emprestimo {

  /* Atributos */
  /* Identificador do emprestimo */
  private idEmprestimo: number = 0;
  /* Identifiacdor do aluno */
  private idAluno: number;
  /* Identificador do livro */
  private idLivro: number;
  /* Data de emprestimo do livro */
  private dataEmprestimo: Date;
  /* Data de devolução do livro */
  private dataDevolucao: Date;
  /* Status de emprestimo do aluno*/
  private statusEmprestimo: string;
  
  /**
   * Construtor da classe Emprestimo
   * 
   * @param idAluno Identificador do aluno
   * @param idLivro Identificado do livro
   * @param dataEmprestimo data de emprestimo do livro
   * @param dataDevolucao Data de devolução do livro
   * @param statusEmprestimo status de emprestimo do livro
   */
  constructor(
      idAluno: number,
      idLivro: number,
      dataEmprestimo: Date,
      dataDevolucao: Date,
      statusEmprestimo: string,
  ){
      this.idAluno = idAluno;
      this.idLivro = idLivro;
      this.dataEmprestimo = dataEmprestimo;
      this.dataDevolucao = dataDevolucao;
      this.statusEmprestimo = statusEmprestimo;
  }

  /* Métodos get e set */
  /**
   * Recupera o identificador do emprestimo
   * @returns o identificador do emprestimo
   */
  public getIdEmprestimo(): number {
      return this.idEmprestimo;
  }

  /**
   * Atribui um valor ao identificador do emprestimo
   * @param idEmprestimo novo identificado do emprestimo
   */
  public setIdEmprestimo(idEmprestimo: number): void {
      this.idEmprestimo = idEmprestimo;
  }

  /**
   * Retorna o identificador do aluno.
   *
   * @returns {string} O identificador do aluno.
   */
  public getIdAluno(): number {
      return this.idAluno;
  }

  /**
   * Define o identificador do aluno.
   * 
   * @param idAluno - O identificador do aluno a ser definida.
   */
  public setIdALuno(idAluno: number): void {
      this.idAluno = idAluno;
  }

  /**
   * Retorna o identificador do livro.
   *
   * @returns {string} O identificador do livro.
   */
  public getIdLivro(): number {
  return this.idLivro;
  }

  /**
   * Define o identificador do livro.
   *
   * @param idLivro - O identificador do livro.
   */
  public setIdLivro(idLivro: number): void {
      this.idLivro = idLivro;
  }

  /**
   * Retorna a data de emprestimo do livro.
   *
   * @returns A data de emprestimo do livro.
   */
  public getDataEmprestimo(): Date {
      return this.dataEmprestimo;
  }

  /**
   * Define a data de emprestimo do livro.
   * 
   * @param dataEmprestimo - a data de emprestimo do livro a ser definido.
   */
  public setDataEmprestimo(dataEmprestimo: Date): void {
      this.dataEmprestimo = dataEmprestimo;
  }

  /**
   * Retorna a data de devolução do livro.
   *
   * @returns {string} A data de devolução do livro.
   */
  public getDataDevolucao(): Date {
      return this.dataDevolucao;
  }

  /**
   * Define a data de devolução do livro.
   * 
   * @param dataDevolucao - A data de devoluçao do livro.
   */
  public setDevolucao(dataDevolucao: Date): void {
      this.dataDevolucao = dataDevolucao;
  }

  /**
   * Retorna o status do emprestimo do livro.
   *
   * @returns {string} O status de emprestimo do livro.
   */
  public getStatusEmprestimo(): string {
  return this.statusEmprestimo;
  }

  /**
  * Define o status de emprestimo do livro.
  *
  * @param statusEmprestimo - O status de emprestimo do livro.
  */
  public setStatusEmprestimo(statusEmprestimo: string): void {
      this.statusEmprestimo = statusEmprestimo;
  }
}