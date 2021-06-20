import { Todo } from "@jfdpaul/alphaa-todo-dto";
import { callAPI } from "./requests";

const baseUrl = 'http://localhost:3001/todos';

class ApiHelper {
  async getTodos(): Promise<Todo[]> {
    return callAPI(baseUrl, 'GET', null);
  }

  async createTodo(value: Todo): Promise<Todo> {
    return callAPI(baseUrl, 'POST', value);
  }

  async updateTodo(id: string, value: Todo): Promise<Todo> {
    return callAPI(`${baseUrl}/${id}`, 'PUT', value);
  }

  async deleteTodo(id: string) {
    return callAPI(`${baseUrl}/${id}`, 'DELETE', null);
  }
}

export default new ApiHelper();
