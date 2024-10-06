import { useGetTasksQuery, useUpdateTaskStatusMutation } from "@/state/api";
import { Dispatch, SetStateAction } from "react";

type BoardViewProps = {
  id: string;
  setIsModalNewTaskOpen: Dispatch<SetStateAction<boolean>>;
};

const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({ id, setIsModalNewTaskOpen }: BoardViewProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({});
  };
  return <div>BoardView</div>;
};
export default BoardView;
