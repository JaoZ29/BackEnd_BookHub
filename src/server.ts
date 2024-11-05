import express from 'express';
import cors from 'cors';
import { router } from './routes';
//criando servidor express
const server = express();

//configura o servidor para aceitar requisições de outros dominios
server.use(cors());

//configura o servidor para aceitar requisições no formato JSON
server.use(express.json());

//configurando as rotas no servidor
server.use(router);

//exporta o servidor
export { server };