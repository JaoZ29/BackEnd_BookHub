import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;
/**
 * classe que representa o Emprestimo
 */
export class Emprestimo {

    /* Atributos */
    /* Identificador do Emprestimo */
    private idEmprestimo: number = 0;
    /* identificador do Aluno */
    private idAluno: number;
    /* identificador do Emprestimo */
    private idLivro: number;
    /* data do Emprestimo */
    private dataEmprestimo: Date;
    /* DataDevolução do Emprestimo */
    private dataDevolução: Date;
    /* Status do Emprestimo */
    private statusEmprestimo: string;
    

     /**
     * Construtor da classe Emprestimo
     * @param idAluno id do Aluno
     * @param idEmprestimo id do Emprestimo
     * @param dataEmprestimo data do Emprestimo
     * @param DataDevolução data de devolução do Emprestimo
     * @param StatusEmprestimo Status do Emprestimo
     */
    
    
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolução: Date,
        statusEmprestimo:string,
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolução = dataDevolução;
        this.statusEmprestimo = statusEmprestimo;
    }
    
        /* Métodos get e set */
    /**
     * Recupera o identificador do Emprestimo
     * @returns o identificador do Emprestimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um Status ao identificador do Emprestimo
     * @param idEmprestimo novo identificado do Emprestimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Retorna o idAluno do Emprestimo.
     *
     * @returns {number} o idAluno do Emprestimo.
     */
    public getidAluno(): number {
        return this.idAluno;
    }
    
    /**
     * Define O idAluno do Emprestimo.
     * 
     * @param idAluno - o idAluno do Emprestimo a ser definido.
     */
    public setidAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

        /**
     * Retorna o idEmprestimo do Emprestimo.
     *
     * @returns {number} o idEmprestimo do Emprestimo.
     */
    public getidLivro(): number {
        return this.idLivro;
    }
    
    /**
     * Define o idEmprestimo do Emprestimo.
     * 
     * @param idEmprestimo - o idEmprestimo do Emprestimo a ser definido.
     */
    public setidLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna o data do Emprestimo.
     *
     * @returns {Date} o data do Emprestimo.
     */
    public getdataEmprestimo(): Date {
        return this.dataEmprestimo;
    }
    
    /**
     * Define o data do Emprestimo.
     * 
     * @param dataEmprestimo - o data do Emprestimo a ser definido.
     */
    public setdataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna DataDevolução do Emprestimo.
     *
     * @returns {Date} DataDevolução do Emprestimo.
     */
    public getDataDevolução(): Date {
        return this.dataDevolução;
    }
    
    /**
     * Define DataDevolução do Emprestimo.
     * 
     * @param DataDevolução - DataDevolução do Emprestimo a ser definido.
     */
    public setDataDevolução(dataDevolução: Date): void {
        this.dataDevolução = dataDevolução;
    }

    /**
     * Retorna o Status do Emprestimo.
     *
     * @returns {string} o Status do Emprestimo 
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }
    
    /**
     * Define o Status do Emprestimo.
     * 
     * @param StatusEmprestimo - o Status do Emprestimo a ser definido.
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }



    /**
     * Busca e retorna uma lista de Emprestimo do banco de dados.
     * @returns Um array de objetos do tipo `Emprestimo` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "Emprestimo".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Emprestimo`.
     * - Cada Emprestimo é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemEmprestimo(): Promise<Array<Emprestimo> | null> {
        // objeto para armazenar a lista de Emprestimo
        const listaDeEmprestimo: Array<Emprestimo> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectEmprestimo = `SELECT * FROM Emprestimo;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectEmprestimo);

            // usando a resposta para instanciar um objeto do tipo Emprestimo
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto Emprestimo
                const novoEmprestimo = new Emprestimo(
                    linha.id_aluno,
                    linha.id_livro,
                    linha.data_emprestimo,
                    linha.data_devolucao,
                    linha.status_emprestimo
                );

                // atribui o ID objeto
                novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                // adiciona o objeto na lista
                listaDeEmprestimo.push(novoEmprestimo);
            });

            // retorna a lista de Emprestimo
            return listaDeEmprestimo;
        } catch (error) {
            console.log('Erro ao buscar lista de Emprestimo');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um Emprestimo no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Emprestimo` e insere seus dados (isbn, modelo, ano e cor)
     * na tabela `Emprestimo` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {Emprestimo} Emprestimo - Objeto contendo os dados do Emprestimo que será cadastrado. O objeto `Emprestimo`
     *                        deve conter os métodos `getTitulo()`, `getAutor()`, `getAnoPublicacao()` e `getIsbn()`
     *                        que retornam os respectivos valores do Emprestimo.
     * @returns {Promise<boolean>} - Retorna `true` se o Emprestimo foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastroEmprestimo(Emprestimo: Emprestimo): Promise<boolean> {
        try {
            // query para fazer insert de um Emprestimo no banco de dados
            const querySelectEmprestimo = `INSERT INTO Emprestimo (idEmprestimo, idAluno, idLivro ,dataEmprestimo, dataDevolução, statusEmprestimo)
                                        VALUES
                                        (
                                        '${Emprestimo.getIdEmprestimo()}', 
                                        '${Emprestimo.getidAluno()}',
                                        '${Emprestimo.getidLivro()}', 
                                        '${Emprestimo.getdataEmprestimo()}, 
                                        '${Emprestimo.getDataDevolução()}',
                                        '${Emprestimo.getStatusEmprestimo}',
                                        RETURNING id_emprestimo;`;

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(querySelectEmprestimo);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Emprestimo cadastrado com sucesso! ID do Emprestimo: ${respostaBD.rows[0].id_emprestimo}`);
                // true significa que o cadastro foi feito
                return true;
            }
            // false significa que o cadastro NÃO foi feito.
            return false;

            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o Emprestimo. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
} 