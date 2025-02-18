import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface GetTodoUseCase {
  excute(id: number): Promise<TodoEntity>;
}

export class GetTodo implements GetTodoUseCase {
  constructor(private readonly repository: TodoRepository) {}

  excute(idTodo: number): Promise<TodoEntity> {
    return this.repository.findById(idTodo);
  }
}
