// component import
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';


const TaskList = ({tasks, removeTask, enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
      {/* Here pass each task into the taskItem component */}
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TaskList