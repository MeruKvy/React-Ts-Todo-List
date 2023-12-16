import React, { createContext, useState } from "react";
import { TaskTypeEnum } from "../components/enums";

interface TaskContextType {
  tasks: TaskArrayType;
  setTasks: React.Dispatch<React.SetStateAction<TaskArrayType>>;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => {},
});

export interface TaskType {
  text: string;
  type: TaskTypeEnum;
  done: boolean;
  id: string;
}

interface ContextProps {
  children: React.ReactNode;
}

interface TaskArrayType extends Array<TaskType> {}

export const TaskContextProvider = ({ children }: ContextProps) => {
  const [tasks, setTasks] = useState<TaskArrayType>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
