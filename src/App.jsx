import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'

function App() {

  //const [tasks, setTasks] = useLocalStorage('react-todo.tasks',[])
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [preFocus, setPreFocus] = useState(null)

  const addTask = (task) => {
    setTasks( prevState => [...prevState, task] );
    //console.log(tasks);
  }

  const removeTask = (task) => {

    const confirmed = window.confirm("Are you sure you want to delete this task?")

    if (confirmed){
      setTasks(prevState => prevState.filter(
        i => i.id != task.id
      ))
      console.log("This is delete: "+task);
    }
  }

  const updateTask = (task) => {
      setTasks(prevState => prevState.map(
        t => (
          t.id == task.id ? {...t, name: task.name} : t
        )
      ))
      //TODO: Close the edit mode
      closeEditMode()
  }

  const closeEditMode = () => {
    setIsEditing(false)
    preFocus.focus()
    //console.log("hey: ",preFocus)
  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    // TODO: Set the focus back to original
    setPreFocus(document.activeElement)
  }

  return (
    <div className="container">
      
      <header>
          <h1>
              My Task List
          </h1>
      </header>
      {isEditing && (
        <EditForm 
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />  
      )}

      <CustomForm addTask={addTask}/> {/* Get tasks from this form */}
      {/* Then pass tasks into task list */}
      { tasks && <TaskList tasks={tasks} removeTask={removeTask} enterEditMode={enterEditMode}/> }
    </div>
  )
}

export default App
