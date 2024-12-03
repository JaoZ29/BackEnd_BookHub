import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do livro */
    private idLivro: number = 0;
    /* titulo do livro */
    private titulo: string;
    /* autor do livro */
    private autor: string;
    /* anoPublicacao do livro */
    private anoPublicacao: string;
    /* editora do livro */
    private editora: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private statusLivroEmprestado: string;

    /**
     * Construtor da classe Livro
     * 
     * @param titulo titulo do livro
     * @param autor autor do livro
     * @param anoPublicacao Nascimento do livro
     * @param editora editora do livro
     * @param isbn isbn no livro
     * @param quantTotal quantidade total do livro
     * @param quantDisponivel quantidade disponivel do livro
     * @param valorAquisicao
     * @param statusLivroEmprestado status livro emprestado do livro
     */
    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: string,
        editora: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
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
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a titulo do livro.
     *
     * @returns {string} A titulo do livro.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Define a titulo do livro.
     * 
     * @param titulo - A titulo do livro a ser definida.
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
     * @param autor - O titulo do autor do livro.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * Retorna o anoPublicacao do livro.
     *
     * @returns {string}O anoPublicacao do livro.
     */
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    /**
     * Define o anoPublicacao do livro.
     * 
     * @param anoPublicacao - O anoPublicacao a ser definido para o livro.
     */
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     * Retorna a editora do livro.
     *
     * @returns {string} A editora do livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define a editora do livro.
     * 
     * @param editora - A editora do livro.
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * @returns {string}
     */
    public getIsbn(): string {
        return this.isbn;
    }

    /**
     * @param isbn
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

     /**
     * @returns {number}
     */
     public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * @param quantTotal
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }
    
    /**
     * @returns {number}
     */
     /**
     * @returns {number}
     */
     public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    /**
     * @param quantDisponivel
     */
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }
    /**
     * @returns {number}
     */
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * @param valorAquisicao
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }
    /**
     * @returns {string}
     */
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * @param statusLivroEmprestado
     */
    public setStatuslivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    
    /**
     * Busca e retorna uma lista de livros do banco de dados.
     * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "livro".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
     * - Cada livro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemLivros(): Promise<Array<Livro> | null> {
        // objeto para armazenar a lista de livros
        const listaDeLivros: Array<Livro> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectlivro = `SELECT * FROM livro;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectlivro);

            // usando a resposta para instanciar um objeto do tipo livro
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto livro
                const novoLivro = new Livro(
                    linha.titulo,
                    linha.autor,
                    linha.ano_publicacao,
                    linha.editora,
                    linha.isbn,
                    linha.quant_total,
                    linha.quant_disponivel,
                    linha.valor_aquisicao,
                    linha.status_livro_emprestado
                );

                // atribui o ID objeto
                novoLivro.setIdLivro(linha.id_livro);

                // adiciona o objeto na lista
                listaDeLivros.push(novoLivro);
            });

            // retorna a lista de livros
            return listaDeLivros;
        } catch (error) {
            console.log('Erro ao buscar lista de livros');
            return null;
        }
    }

/**
     * Realiza o cadastro de um livro no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Livro` e insere seus dados ()
     * na tabela `livros` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {Livro} livro - Objeto contendo os dados do livro que será cadastrado. O objeto `Livro`
     *                        deve conter os métodos `getMarca()`, `getModelo()`, `getAno()` e `getCor()`
     *                        que retornam os respectivos valores do livro.
     * @returns {Promise<boolean>} - Retorna `true` se o livro foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
static async cadastroLivro(livro: Livro): Promise<boolean> {
    try {
        // query para fazer insert de um livro no banco de dados
        const queryInsertLivro = `INSERT INTO livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                    VALUES
                                    ('${livro.getTitulo()}', 
                                    '${livro.getAutor()}', 
                                    '${livro.getEditora()}', 
                                    '${livro.getAnoPublicacao()}',
                                    '${livro.getIsbn()}',
                                     ${livro.getQuantTotal()},
                                     ${livro.getQuantDisponivel()},
                                     ${livro.getValorAquisicao()},
                                    '${livro.getStatusLivroEmprestado()}')
                                    RETURNING id_livro;`;

                console.log(queryInsertLivro);

        // executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryInsertLivro);

        // verifica se a quantidade de linhas modificadas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`Livro cadastrado com sucesso! ID do livro: ${respostaBD.rows[0].id_livro}`);
            // true significa que o cadastro foi feito
            return true;
        }
        // false significa que o cadastro NÃO foi feito.
        return false;

        // tratando o erro
    } catch (error) {
        // imprime outra mensagem junto com o erro
        console.log('Erro ao cadastrar o livro. Verifique os logs para mais detalhes.');
        // imprime o erro no console
        console.log(error);
        // retorno um valor falso
        return false;
    }
}

static async removerLivro(idLivro: number): Promise<boolean> {
    try {
        // query para fazer delete de um Livro no banco de dados
        const queryDeleteLivro = `DELETE FROM Livro WHERE id_livro = ${idLivro};`;

        // executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryDeleteLivro);
        //Verifica se o numero de linhas alteradas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`Livro removido com sucesso! ID do livro: ${idLivro}`);
            //retorna true, indicando que o livro foi removido com sucesso
            return true;
        }
        return false

    } catch (error) {
        console.log('Erro ao remover o Livro. Verifique os logs para mais detalhes.');
        // imprime o erro no console da API
        console.log(error);
        // retorno um valor falso
        return false;
    }
  }

  static async atualizarLivro(Livro: Livro): Promise<boolean> {
    try {
        //query para atualizar o carro no banco de dados
        const queryUpdateLivro = `UPDATE Livro SET 
                                   titulo = '${Livro.titulo}',
                                   autor = '${Livro.autor}',
                                   ano_publicacao = '${Livro.anoPublicacao}',
                                   editora = '${Livro.editora}',
                                   isbn = '${Livro.isbn}',
                                   quantTotal = '$'

                                   modelo ='${carro.getModelo()}', 
                                   marca = '${carro.getMarca()}',
                                   ano = '${carro.getAno()}',
                                   cor = '${carro.getCor()}',
                                   WHERE id_carro= ${carro.getIdCarro()};`;
        //executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryUpdateCarro);
        //Verifica se o numero de linhas alteradas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`Carro atualizado com sucesso! ID do carro: ${carro.getIdCarro}`);
            //retorna true, indicando que o carro foi atualizado com sucesso
            return true;
        }
        return false
    } catch (error) {
        console.log('Erro ao atualizar o carro. Verifique os logs para mais detalhes.');
        // imprime o erro no console da API
        console.log(error);
        // retorno um valor falso
        return false;
    }
}

}

