import styles from './Tasks.module.css'
import Clipboard from './assets/Clipboard.svg'
import { ITask } from './App'
import { Task } from './Task'
import { Dispatch, SetStateAction } from 'react'

interface ITasks {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export function Tasks({ tasks, setTasks }: ITasks) {
  const countCreated = tasks.length
  const countDone = tasks.filter((obj) => obj.isDone === true).length
  return (
    <div className={styles.tasksTable}>
      <header className={styles.tasksTableHeader}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <div className={styles.tasksCounter}>{countCreated}</div>
        </div>
        <div className={styles.doneTasks}>
          <span>Concluídas</span>
          <div className={styles.tasksCounter}>{countDone}</div>
        </div>
      </header>
      <div className={styles.currentTasksContainer}>
        {tasks.length !== 0 ? (
          <div className={styles.currentTasks}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  isDone={task.isDone}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              )
            })}
          </div>
        ) : (
          <div className={styles.emptyTasks}>
            <img src={Clipboard} alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
