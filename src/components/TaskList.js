import { useGetTasksQuery } from '../features/tasks/tasksApi';
import Task from './Task';

export default function TaskList() {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();

  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && tasks?.length === 0)
    content = <div>No Tasks Found!</div>;

  if (!isLoading && !isError && tasks?.length > 0) {
    content = tasks.map((task) => <Task key={task.id} task={task} />);
  }

  return <div className="lws-task-list">{content}</div>;
}
