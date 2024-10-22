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
    const id = req.params.id;
    console.log(id, 10);
    res.json({ id });
  };
}
