import { TaskContainer } from "./Task.styles";
import { TaskType } from "../../../Apps/TodoList/types";
import DraggableItem from "../DraggableItem";
import { ItemTypes } from "../../../utils/TodoList/itemTypes";

function Task({
  onDelete,
  task,
  index,
  moveTask,
  containerId,
}: {
  onDelete: () => void;
  task: TaskType;
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
  containerId: string;
}) {
  return (
    <DraggableItem
      id={task.id}
      index={index}
      component={TaskContainer}
      name={ItemTypes.task}
      moveElement={moveTask}
      transition={{ type: "spring", stiffness: 600, damping: 30 }}
      containerId={containerId}
    >
      <span>
        {task.name} - {task.id}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        delete
      </button>
    </DraggableItem>
  );
}

export default Task;
