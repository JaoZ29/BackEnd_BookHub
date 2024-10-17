/**
 * Classe que representa um livro.
 */
export class livro {

  /* Atributos */
  /* Identificador do livro */
  private idLivro: number = 0;
  /* Titulo do livro */
  private titulo: string;
  /* Autor do livro */
  private autor: string;
  /* Editora do livro */
  private editora: string;
  /* Ano de publicação do livro */
  private anoPublicado: string;
  /*  Padrão Internacional de Numeração do livo*/
  private isbn: string;
  /* Quantidade total do livro */
  private quantTotal: number;
  /* Quantidade disponivel do livro */
  private quantDisponivel: number;
  /* Valor de aquisição do livro */
  private valorAquisicao: number;
  /* Status do livro emprestado */
  private statusLivroEmprestado: string;


  /**
   * Construtor da classe Aluno
   * 
   * @param titulo Titulo do livro
   * @param autor Autor do livro
   * @param editora Editora do livro
   * @param anoPublicado Ano de publicação do livro
   * @param isbn Padrão internacional de numeração do livro
   * @param quantTotal Quantidade total de livros
   * @param quantDisponivel Quantidade disponivel de livros
   * @param valorAquisicao Valor de aquisição do livro
   * @param statusLivroEmprestado Status do livro emprestado
   */
  constructor(
      titulo: string,
      autor: string,
      editora: string,
      anoPublicado: string,
      isbn: string,
      quantTotal: number,
      quantDisponivel: number,
      valorAquisicao: number,
      statusLivroEmprestado: string
  ) {
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.anoPublicado = anoPublicado;
      this.isbn = isbn;
      this.quantTotal = quantTotal;
      this.quantDisponivel = quantDisponivel;
      this.valorAquisicao = valorAquisicao;
      this.statusLivroEmprestado = statusLivroEmprestado;
  }

  /* Métodos get e set */
  /**
   * Recupera o identificador do livro
   * @returns o identificador do livro
   */
  public getIdLivro(): number {
      return this.idLivro;
  }

  /**
   * Atribui um valor ao identificador do livro
   * @param idLivro novo identificado do livro
   */
  public setIdAluno(idLivro: number): void {
      this.idLivro = idLivro;
  }

  /**
   * Retorna o titulo do livro.
   *
   * @returns {string} O titulo do livro.
   */
  public getTitulo(): string {
      return this.titulo;
  }

  /**
   * Define o titulo do livro.
   * 
   * @param titulo - O titulo do livro a ser definida.
   */
  public setTitulo(titulo: string): void {
      this.titulo = titulo;
  }

  /**
   * Retorna o autor do livro.
   *
   * @returns {string} O autor do livro.
   */
  public getAutor(): string {
      return this.autor;
  }

  /**
   * Define o autor do livro.
   *
   * @param autor - O autor do livro.
   */
  public setAutor(autor: string): void {
      this.autor = autor;
  }

  /**
   * Retorna a editora do livro.
   *
   * @returns A editora do livro.
   */
  public getEditora(): string {
  return this.editora;
  }

  /**
   * Define A editora do livro.
   * 
   * @param editora - A editora do livro a ser definido.
   */
  public setEditora(editora: string): void {
      this.editora = editora;
  }

  /**
   * Retorna o ano de publicação do livro.
   *
   * @returns {string} ano de publicação do livro.
   */
  public getAnoPublicado(): string {
  return this.anoPublicado;
  }

  /**
   * Define o ano de publicação do livro.
   * 
   * @param anoPublicado - O ano de publicação do livro.
   */
  public setAnoPublicado(anoPublicado: string): void {
      this.anoPublicado = anoPublicado;
  }


  /**
   * Retorna o Padrão Internacional de Numeração do livo.
   *
   * @returns {string} O Padrão Internacional de Numeração do livo.
   */
  public getIsbn(): string {
  return this.isbn;
  }

  /**
  * Define o Padrão Internacional de Numeração do livo.
  *
  * @param isbn - Padrão Internacional de Numeração do livo
  */
  public setIsbn(isbn: string): void {
      this.isbn = isbn;
  }

  /**
  * Retorna a quantidade total de livros.
  *
  * @returns {string} A quntidade total de livros.
  */
  public getQuantTotal(): number {
  return this.quantTotal;
  }
  
  /**
  * Define a quantidade total de livros.
  *
  * @param quantTotal - A quantitade total de livros.
  */
  public setQunatTotal(quantTotal: number): void {
      this.quantTotal = quantTotal;
  }

  /**
  * Retorna a quantidade disponivel de livros.
  *
  * @returns {string} A quantidade disponicel de livros
  */
  public getQuantDisponivel(): number {
  return this.quantDisponivel;
  }
      
  /**
  * Define a quantidade disponivel de livros.
  *
  * @param quantDisponivel - A quantidade disponivel de livros.
  */
  public setQuantDisponivel(quantDisponivel: number): void {
      this.quantDisponivel = quantDisponivel;
  }

  /**
  * Retorna o valor de aquisição do livro
  *
  * @returns {string} O valor de aquisição do livro.
  */
  public getValorAquisicao(): number {
  return this.valorAquisicao;
  }
      
  /**
  * Define o valor de aquisição do livros.
  *
  * @param valorAquisicao - O valor de aquisição do livro.
  */
  public setValorAquisicao(valorAquisicao: number): void {
      this.valorAquisicao = valorAquisicao;
  }

  /**
  * Retorna o status do livro emprestado.
  *
  * @returns {string} O status do livro emprestado.
  */
  public getStatusLivroEmprestado(): string {
  return this.statusLivroEmprestado;
  }
      
  /**
  * Define o status do livro emprestado.
  *
  * @param statusLivroEmprestado - O status do livro emprestado.
  */
  public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
      this.statusLivroEmprestado = statusLivroEmprestado;
  }

}