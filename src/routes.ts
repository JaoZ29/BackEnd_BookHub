import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";
import { Aluno } from "./model/Aluno";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/lista/livro", LivroController.todos);
// Rota para cadastrar um novo livro
router.post("/novo/livro", LivroController.novo);
// Rota para remover um livro
router.delete("/delete/livro/:idlivro", LivroController.remover);
//Rota para atualizar um livro
router.put("/atualizar/livro/:idlivro", LivroController.atualizar);

/* 
* ROTAS PARA ALUNOS
*/ 
// // Rota para listar os ALUNOS
// router.get("/lista/aluno", AlunoController.todos);
// // Rota para cadastrar um novo aluno
// router.post("/novo/aluno", AlunoController.novo);
// // Rota para remover um aluno
// router.delete("/delete/aluno/:idaAuno", AlunoController.remover);
// // Rota para atualizar um aluno
// router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar);

/* 
* ROTAS PARA EMPRESTIMOS
*/ 
// Rota para listar os emprestimos

router.get("/lista/emprestimo", EmprestimoController.todos);
// Rota para cadastrar um novo emprestimos
router.post("/novo/emprestimo", EmprestimoController.novo);
// // Rota para remover um emprestimos
// router.delete("/delete/pedido/:idemprestimo", EmprestimoController.remover);
// // Rota para atualizar um emprestimos
// router.put("/atualizar/pedido/:idemprestimo", EmprestimoController.atualizar);

// exportando as rotas
export { router };