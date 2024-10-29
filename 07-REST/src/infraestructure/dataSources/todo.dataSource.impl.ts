import { prisma } from '../../data/postgres';
import {
  CreateTodoDto,
  TodoDataSource,
  TodoEntity,
  UpdateTodoDto,
} from '../../domain';

export class TodoDataSourceImp implements TodoDataSource {
  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    const [error, todoDtoCreated] = CreateTodoDto.create(createTodoDto);

    if (error) throw new Error(`todo not created :${error}`);

    const todo = await prisma.todo.create({ data: todoDtoCreated! });

    return TodoEntity.fromObject(todo);
  }

  async getAll(): Promise<TodoEntity[]> {
    const todos = await prisma.todo.findMany();

    return todos.map((todo) => TodoEntity.fromObject(todo));
  }

  async findById(id: number): Promise<TodoEntity> {
    if (isNaN(id)) throw new Error('id not found.');

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) throw new Error(`todo not found with id:${id}`);

    return TodoEntity.fromObject(todo);
  }

  async updateTodoById(updateTodo: UpdateTodoDto): Promise<TodoEntity> {
    const [error, updateTodoDto] = UpdateTodoDto.update({ ...updateTodo });

    if (error) throw new Error(`${error}`);

    const todo = await prisma.todo.findFirst({ where: { id: updateTodo.id } });

    if (!todo)
      throw new Error(`error todo not found, with id: ${updateTodo.id}`);

    const todoUpdated = await prisma.todo.update({
      where: { id: updateTodo.id },
      data: updateTodoDto!.values,
    });

    return TodoEntity.fromObject(todoUpdated);
  }

  async deleteTodoById(id: number): Promise<TodoEntity> {
    if (isNaN(id)) throw new Error(`error with id: ${id}`);

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) throw new Error(`error todo not found, with id: ${id}`);

    const DeleteTodo = await prisma.todo.delete({ where: { id } });

    if (!DeleteTodo) throw new Error(`error todo not deleted, with id: ${id}`);

    return TodoEntity.fromObject(DeleteTodo);
  }
}
