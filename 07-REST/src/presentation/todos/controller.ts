import { Request, Response } from 'express';

const todos = [
  { id: 1, text: 'buy milk', completedAt: new Date() },
  { id: 2, text: 'buy bread', completedAt: null },
  { id: 3, text: 'buy eggs', completedAt: new Date() },
];

export class TodosController {
  //*DI
  constructor() {}

  /**
   * getTodos
   */
  public getTodos = (req: Request, res: Response): any => {
    return res.json(todos);
  };

  /**
    * getTodoById
  **/
  public getTodoById = (req: Request, res: Response): any => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi

    if (isNaN(id))
      return res.status(400).json({ errorMessage: `error with id: ${id}` });

    const todo = todos.find((todo) => todo.id === id);
    return todo
      ? res.status(200).json(todo)
      : res.status(404).json({ errorMessage: `error with id:${id} not found` });
  };

  /**
   * createTodo
   */
  public createTodo = (req: Request, res: Response): any => {
    const { text } = req.body;

    if (!text)
      return res.status(400).json({ errorMessage: `error text not found` });

    const newTodo = {
      id: todos.length + 1,
      text: text,
      completedAt: new Date(),
    };

    todos.push(newTodo);
    return res.status(200).json(newTodo);
  };

  /**
   * updateTodo
   */
  public updateTodo = (req: Request, res: Response): any => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi
    if (isNaN(id))
      return res.status(400).json({ errorMessage: `error with id: ${id}` });

    const todo = todos.find((todo) => todo.id === id);

    if (!todo)
      return res
        .status(404)
        .json({ errorMessage: `error todo not found, with id: ${id}` });

    const { text, completedAt } = req.body;
    // if (!text || !completedAt)
    //   return res
    //     .status(400)
    //     .json({
    //       errorMessage: `error text not found: ${JSON.stringify(req.body)}`,
    // });

    //* ojo : los objetos en javascript se llaman por referencia asi que al editar este objeto actualizo la referencia a la lista de todos
    // esto no se recomienda pues no se deberia mutar asi la inf.
    // AQUI SI HAY VALOR ENTRANTE ACTUALIZALO SINO NO LO USES
    todo.text = text || todo.text;

    completedAt === 'null'
      ? (todo.completedAt = null)
      : (todo.completedAt = new Date(completedAt || todo.completedAt));

    return res.status(200).json(todo);
  };

  public deleteTodo = (req: Request, res: Response): any => {
    const id = +req.params.id; //el operdor =+ hace l conversion de string  entero por mi
    if (isNaN(id))
      return res.status(400).json({ errorMessage: `error with id: ${id}` });

    const todo = todos.find((todo) => todo.id === id);

    if (!todo)
      return res
        .status(404)
        .json({ errorMessage: `error todo not found, with id: ${id}` });

    todos.splice(todos.indexOf(todo),1);//el filter tambien es una opcion

    return res.status(200).json({ todo, message: `delete elemente by id: ${id}` });
  };
}
