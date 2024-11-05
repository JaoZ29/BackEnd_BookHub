import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA CARROS
*/
// Rota para listar os livro
router.get("/lista/livro", LivroController.todos);
router.post("/novo/livro", LivroController.novo);

/* 
* ROTAS PARA CLIENTES
*/
// Rota para listar os alunos
router.get("/lista/alunos", AlunoController.todos);
router.post("/novo/alunos", AlunoController.novo);

/* 
* ROTAS PARA PEDIDOS
*/
// Rota para listar os pedidos
router.get("/lista/Emprestimo", EmprestimoController.todos);

// exportando as rotas
export { router };