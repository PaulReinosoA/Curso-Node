import { Request, Response } from 'express';

const todos = [
  { id: 1, text: 'buy milk', createdAt: new Date() },
  { id: 2, text: 'buy bread', createdAt: null },
  { id: 3, text: 'buy eggs', createdAt: new Date() },
];

export class TodosController {
  //*DI
  constructor() {}

  /**
   * getTodos
   */
  public getTodos = (req: Request, res: Response) => {
    res.json(todos);
  };

  /**
   * getTodoById
   */
  public getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi

    if(isNaN(id)) return res.status(400).json({ errorMessage: `error with id: ${id}` });

    const todo = todos.find((todo) => todo.id === id);
    todo
      ? res.status(200).json(todo)
      : res.status(404).json({ errorMessage: `error with id:${id} not found` });
  };
}
