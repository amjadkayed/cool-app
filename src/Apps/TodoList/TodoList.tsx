import Task from "../../components/UI/TodoList/Task";
import { useTasks } from "../../hooks/TodoList/useTasks";
import {
  DoneContainer,
  InProgressContainer,
  TodoListContainer,
} from "./TodoList.styles";

function TodoList() {
  const { addTask, removeTask, tasksList, moveTask } = useTasks({
    name: "todoListTasks",
  }); // Change this line
  const {
    addTask: addDoneTask,
    removeTask: removeDoneTask,
    tasksList: doneTasksList,
    moveTask: moveDoneTask,
  } = useTasks({ name: "doneTasks" });

  return (
    <TodoListContainer>
      <div>TODO List </div>
      <div>this is the best to do list ever</div>
      <div style={{ display: "flex", gap: "30px" }}>
        <InProgressContainer draggable={false}>
          {tasksList.map((task, index) => (
            <Task
              moveTask={moveTask}
              key={task.id}
              index={index}
              onDelete={() => {
                removeTask(task);
              }}
              task={task}
              containerId="todoListTasks"
            />
          ))}
          <button
            onClick={() => {
              addTask({
                name: "new task",
                date: "1.1.2021",
                id: Math.floor(Math.random() * 1000),
                isCompleted: false,
              });
            }}
          >
            click me
          </button>
        </InProgressContainer>
        <DoneContainer>
          {doneTasksList.map((task, index) => (
            <Task
              moveTask={moveDoneTask}
              key={task.id}
              index={index}
              onDelete={() => {
                removeDoneTask(task);
              }}
              task={task}
              containerId="doneTasks"
            />
          ))}
          <button
            onClick={() => {
              addDoneTask({
                name: "new done task",
                date: "1.1.2021",
                id: Math.floor(Math.random() * 1000),
                isCompleted: false,
              });
            }}
          >
            click me
          </button>
        </DoneContainer>
      </div>
    </TodoListContainer>
  );
}

export default TodoList;
