import {
  CreateTodoDto,
  TodoDataSource,
  TodoEntity,
  TodoRepository,
  UpdateTodoDto,
} from '../../domain';

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly datasource: TodoDataSource) {}

  create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.datasource.create(createTodoDto);
  }

  getAll(): Promise<TodoEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<TodoEntity> {
    return this.datasource.findById(id);
  }

  updateTodoById(updateTodo: UpdateTodoDto): Promise<TodoEntity> {
    return this.datasource.updateTodoById(updateTodo);
  }

  deleteTodoById(id: number): Promise<TodoEntity> {
    return this.datasource.deleteTodoById(id);
  }
}
