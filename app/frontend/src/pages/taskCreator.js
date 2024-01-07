import { useEffect, useState } from 'react'
import TaskBox from '../components/TaskBox.js'
import CreateTask from '../components/CreateTask.js'

function Tasks() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
      fetch('http://0.0.0.0:8000/api/tasks/')
      .then(res => res.json())
      .then(res => setTasks(res))
    }, [])
    return (
        <main>
          
          <h1 style={{margin: 15}}>Crear Tareas</h1>
  
          <CreateTask user_id={1}/>
            
          {
            tasks.map(task => (
              <TaskBox name={task.name} description={task.description} state={task.state} user_id={task.user_id} id={task.id} id_user={task.id_user} key={task.id} />
            ))
          }
        </main>
      );
  }
  
export default Tasks;