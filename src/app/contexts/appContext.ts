import { createContext } from "react";

interface ProviderContextType{
  task: any;
  setTask: React.Dispatch<React.SetStateAction<any>>;
  todoList: any;
  setTodoList: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = createContext<ProviderContextType | any>(undefined);

export default AppContext;