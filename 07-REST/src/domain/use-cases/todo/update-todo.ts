import { UpdateTodoDto } from '../../DTOs';
import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface UpdateTodoUseCase {
  excute(dto: UpdateTodoDto): Promise<TodoEntity>;
}

export class UpdateTodo implements UpdateTodoUseCase {
  constructor(private readonly repository: TodoRepository) {}

  excute(dto: UpdateTodoDto): Promise<TodoEntity> {
    return this.repository.updateTodoById(dto);
  }
}
