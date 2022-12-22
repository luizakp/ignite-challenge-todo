import styles from './Task.module.css'
import Trash from './assets/trash.svg'
import Unchecked from './assets/uncheck.svg'
import Cheked from './assets/check.svg'
import { ITask } from './App'
import { Dispatch, SetStateAction } from 'react'

interface TaskProps extends ITask {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export function Task({ id, content, isDone, tasks, setTasks }: TaskProps) {
  function handleDone() {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone
      }
      return task
    })
    setTasks(updatedTasks)
  }
  function handleDelete() {
    setTasks((prevState) =>
      prevState.filter((existingTask) => existingTask.id !== id)
    )
  }

  return (
    <div className={styles.taskContainer}>
      <button onClick={handleDone}>
        {isDone ? (
          <img src={Cheked} alt="Tarefa feita" />
        ) : (
          <img src={Unchecked} alt="Tarefa não feita" />
        )}
      </button>
      <div className={styles.taskContent}>
        <p className={isDone ? styles.taskDone : ''}>{content}</p>
      </div>
      <button onClick={handleDelete}>
        <img src={Trash} alt="deletar" />
      </button>
    </div>
  )
}
