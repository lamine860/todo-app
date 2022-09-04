import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:4000";

export async function getTodos(): Promise<AxiosResponse<APIDataType>> {
  try {
    const todos: AxiosResponse<APIDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (e) {
    throw new Error(e as string);
  }
}
export async function addTodo(
  formData: ITodo
): Promise<AxiosResponse<APIDataType>> {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: formData.status,
    };
    const saveTodo: AxiosResponse<APIDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );
    return saveTodo;
  } catch (e) {
    throw new Error(e as string);
  }
}

export async function updateTodo(
  todo: ITodo
): Promise<AxiosResponse<APIDataType>> {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<APIDataType> = await axios.put(
      baseUrl + `/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (e) {
    throw new Error(e as string);
  }
}

export async function deleteTodo(
  _id: string
): Promise<AxiosResponse<APIDataType>> {
  try {
    const todos: AxiosResponse<APIDataType> = await axios.delete(
      baseUrl + `/delete-todo/${_id}`
    );
    return todos;
  } catch (e) {
    throw new Error(e as string);
  }
}
export async function deleteAllTodos(): Promise<AxiosResponse<APIDataType>> {
  try {
    const todos: AxiosResponse<APIDataType> = await axios.delete(
      baseUrl + `/todos-purge`
    );
    return todos;
  } catch (e) {
    throw new Error(e as string);
  }
}
export async function completeAllTodos(): Promise<AxiosResponse<APIDataType>> {
  try {
    const todos: AxiosResponse<APIDataType> = await axios.put(
      baseUrl + `/todos-completed`
    );
    return todos;
  } catch (e) {
    throw new Error(e as string);
  }
}
