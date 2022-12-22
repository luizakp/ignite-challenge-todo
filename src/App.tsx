import styles from './App.module.css'
import toDoLogo from './assets/toDoLogo.svg'
import plus from './assets/plus.svg'
import { Tasks } from './Tasks'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface ITask {
  id: string
  content: string
  isDone: boolean
}

export function App() {
  const [newTask, setNewTask] = useState<ITask>({
    id: uuidv4(),
    content: '',
    isDone: false
  })
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask((prevState) => ({
      ...prevState,
      content: event.target.value
    }))
  }

  function handleInvalidNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask({
      id: uuidv4(),
      content: '',
      isDone: false
    })
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={toDoLogo} alt="" />
      </header>
      <div className={styles.tasksContainer}>
        <form className={styles.newTask} onSubmit={handleCreateNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTask.content}
            onChange={handleNewTaskChange}
            onInvalid={handleInvalidNewTask}
            required
          />
          <button className={styles.newTaskButton}>
            Criar
            <img src={plus} alt="" />
          </button>
        </form>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}
