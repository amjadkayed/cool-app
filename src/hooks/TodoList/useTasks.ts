import { useEffect, useState } from "react";
import { TaskType } from "../../Apps/TodoList/types";

export const useTasks = ({ name }: { name: string }) => {
  const [tasksList, setTasks] = useState<TaskType[]>([]);
  useEffect(() => {
    try {
      setTasks(JSON.parse(localStorage.getItem(name) || ""));
    } catch {
      console.debug("No tasks found in local storage");
    }
  }, []);

  const addTask = (task: TaskType) => {
    setTasks((prevTasksList) => {
      const updatedTasks = [...prevTasksList, task];
      localStorage.setItem(name, JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const dragTask = tasksList[dragIndex];
    setTasks((prevTasksList) => {
      const updatedTasks = [...prevTasksList];
      updatedTasks.splice(dragIndex, 1);
      updatedTasks.splice(hoverIndex, 0, dragTask);
      localStorage.setItem(name, JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const removeTask = (task: TaskType) => {
    setTasks((prevTasksList) => {
      const updatedTasks = prevTasksList.filter(
        (listTask) => listTask.id !== task.id
      );
      localStorage.setItem(name, JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return { tasksList, addTask, removeTask, setTasks, moveTask };
};
