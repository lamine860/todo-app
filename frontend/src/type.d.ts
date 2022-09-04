interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
}

interface TodoProps {
  todo: ITodo;
}

interface APIDataType {
  message: string;
  todos: ITodo[];
  todo?: ITodo;
  status: string;
}
