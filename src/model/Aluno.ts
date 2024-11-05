import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um Aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do aluno */
    private idAluno: number = 0;
    /* ra do aluno */
    private ra: number = 0;
    /* nome do aluno */
    private nome: string;
    /* sobrenome do carro */
    private sobrenome: string;
    /* data de nascimento do aluno */
    private dataNascimento: Date;
    /* endereco do aluno*/
    private endereco: string;
    /* email do aluno*/
    private email: string;
    /* celular do aluno*/
    private celular: string;




    /**
     * Construtor da classe Aluno
     * 
     * @param nome Nome do Aluno
     * @param sobrenome Sobrenome do Aluno
     * @param dataNascimento Data de Nascimento do Aluno
     * @param endereco Endereço do Aluno
     * @param email email do Aluno
     * @param celular celular do Aluno
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
     * @param idAluno novo identificador do aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = this.idAluno;
    }



    /**
         * Recupera o RA do aluno
         * @returns o RA do aluno
         */
    public getRa(): number {
        return this.ra;
    }

    /**
     * Atribui um valor ao RA do aluno
     * @param ra novo RA do aluno
     */
    public setRaAluno(raAluno: number): void {
        this.ra = this.ra;
    }








    /**
     * Retorna o nome do Aluno.
     *
     * @returns {string} O nome do aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do aluno.
     * 
     * @param nome - Nome do aluno a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }






    /**
     * Retorna o sobrenome do aluno.
     *
     * @returns {string} O sobrenome do aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.
     *
     * @param sobrenome - O sobrenome do aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }





    /**
     * Retorna a data de nascimento do aluno.
     *
     * @returns {Date} A data de nascimento do aluno.
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define a data de nascimento do aluno.
     * 
     * @param dataNascimento - O data de nascimento a ser definida para o aluno.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }





    /**
     * Retorna o endereço do aluno.
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
 * @returns {string} Email do aluno.
 */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email do aluno.
     * 
     * @param email - O email do aluno.
     */
    public setEmail(email: string): void {
        this.email = email;
    }



    /**
 * Retorna o celular do aluno.
 *
 * @returns {string} O celular por aluno.
 */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o celular do aluno.
     * 
     * @param celular - O celular do Aluno.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }

    
    /**
     * Busca e retorna uma lista de carros do banco de dados.
     * @returns Um array de objetos do tipo `Aluno` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "aluno".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe ``.
     * - Cada carro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemAlunos(): Promise<Array<Aluno> | null> {
        // objeto para armazenar a lista de alunos
        const listaDeAlunos: Array<Aluno> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectAluno = `SELECT * FROM aluno;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectAluno);

            // usando a resposta para instanciar um objeto do tipo aluno
            respostaBD.rows.forEach((linha: any) => {
                // instancia (cria) objeto aluno
                const novoAluno = new Aluno(
                    linha.nome,
                    linha.sobrenome,
                    linha.dataNascimento,
                    linha.endereco,
                    linha.email,
                    linha.celular
                );

                // atribui o ID objeto
                novoAluno.setIdAluno(linha.id_aluno);

                // adiciona o objeto na lista
                listaDeAlunos.push(novoAluno);
            });

            // retorna a lista de carros
            return listaDeAlunos;
        } catch (error) {
            console.log('Erro ao buscar lista de alunos');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um carro no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Aluno` e insere seus dados (nome, sobrenome, dataNascimento, endereço, email e telefone)
     * na tabela `Aluno` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {Aluno} aluno - Objeto contendo os dados do carro que será cadastrado. O objeto `Aluno`
     *                        deve conter os métodos `getNome()`, `getSobrenome()`, `getDataNascimento()`, `getEmail()` e `getCelular()`
     *                        que retornam os respectivos valores do aluno.
     * @returns {Promise<boolean>} - Retorna `true` se o aluno foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastroAluno(aluno: Aluno): Promise<boolean> {
        try {
            // query para fazer insert de um aluno no banco de dados
            const queryInsertAluno = `INSERT INTO aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
                                        VALUES
                                        ('${aluno.getNome()}', 
                                        '${aluno.getSobrenome()}', 
                                        '${aluno.getDataNascimento()}', 
                                        '${aluno.getEndereco()}',
                                        '${aluno.getEmail()}',
                                        '${aluno.getCelular()}')
                                        RETURNING id_aluno;`;

            console.log(queryInsertAluno);

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertAluno);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Aluno cadastrado com sucesso! ID do aluno: ${respostaBD.rows[0].id_aluno}`);
                // true significa que o cadastro foi feito
                return true;
            }
            // false significa que o cadastro NÃO foi feito.
            return false;

            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o aluno. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
}

