import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/DTOs';
import {
  CreateTodo,
  DeleteTodo,
  GetTodo,
  GetTodos,
  TodoRepository,
  UpdateTodo,
} from '../../domain';

// const todos = [
//   { id: 1, text: 'buy milk', completedAt: new Date() },
//   { id: 2, text: 'buy bread', completedAt: null },
//   { id: 3, text: 'buy eggs', completedAt: new Date() },
// ];

export class TodosController {
  //*DI
  //*podria enviar el TodoRepositoryImp pero eso haria que necesite enviar esa implementacion especifica y yo quiero podr cambiar a cualquier otra
  constructor(private readonly todoRepository: TodoRepository) {}

  /**
   *   getTodos
   **/
  public getTodos = (req: Request, res: Response) => {
    new GetTodos(this.todoRepository)
      .excute()
      .then((todos) => res.status(200).json(todos))
      .catch((error) => res.status(400).json(error));
  };

  /**
   * getTodoById
   **/
  public getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi

    if (isNaN(id))
      return res.status(400).json({ errorMessage: `error with id: ${id}` });

    new GetTodo(this.todoRepository)
      .excute(id)
      .then((todo) => res.status(200).json(todo))
      .catch((error) => res.status(400).json(error));
  };

  /**
   *  createTodo
   **/
  public createTodo = async (req: Request, res: Response): Promise<any> => {
    //const { text } = req.body;

    const [error, createTodoDto] = CreateTodoDto.create(req.body);

    if (!createTodoDto?.text)
      return res.status(400).json({ errorMessage: `error text not found` });

    if (error) return res.status(400).json({ error });

    new CreateTodo(this.todoRepository)
      .excute(createTodoDto)
      .then((todo) => res.status(200).json(todo))
      .catch((error) => res.status(400).json(error));
  };

  /**
   *   updateTodo
   **/
  public updateTodo = async (req: Request, res: Response): Promise<any> => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi

    const [error, updateTodoDto] = UpdateTodoDto.update({ ...req.body, id });

    if (error) return res.status(400).json({ error });

    new UpdateTodo(this.todoRepository)
      .excute(updateTodoDto!)
      .then((todo) => res.status(200).json(todo))
      .catch((error) => res.status(400).json(error));
  };

  /**
   *   deleteTodo
   **/
  public deleteTodo = async (req: Request, res: Response): Promise<any> => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi
    if (isNaN(id))
      return res.status(400).json({ errorMessage: `error with id: ${id}` });

    new DeleteTodo(this.todoRepository)
      .excute(id!)
      .then((todo) => res.status(200).json(todo))
      .catch((error) =>
        res.status(400).json({
          errorMessage: `error todo not deleted, with id: ${id}, error:${error}`,
        })
      );
  };
}
