import { Router } from 'express';
import { TodosController } from './controller';

export class TodoRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();
    const todosController = new TodosController();

    //solo envio la referencia de la funcion getTodos por que solo enviamos res y req 
    router.get('/',(req,res) => todosController.getTodos(req,res));
    router.get('/:id',(req,res) => todosController.getTodoById(req,res));

    return router;
  }
}


 