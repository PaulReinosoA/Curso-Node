import { Router } from 'express';
import { TodosController } from './controller';
import { TodoDataSourceImp } from '../../infraestructure/dataSources/todo.dataSource.impl';
import { TodoRepositoryImpl } from '../../infraestructure/repositories/todo.repository.impl';

export class TodoRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();

    const datasource = new TodoDataSourceImp();
    const todoRepository = new TodoRepositoryImpl(datasource);
    const todoController = new TodosController(todoRepository);

    //solo envio la referencia de la funcion getTodos por que solo enviamos res y req
    router.get('/', (req, res) => todoController.getTodos(req, res));
    router.get('/:id', (req, res) => todoController.getTodoById(req, res));
    router.post('/', (req, res) => todoController.createTodo(req, res));
    router.put('/:id', (req, res) => todoController.updateTodo(req, res));
    router.delete('/:id', (req, res) => todoController.deleteTodo(req, res));

    return router;
  }
}
