import React, { Component }from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import './styles.scss'

interface ITask {
  ID: number;
  title: string;
  isComplete: boolean;
}

export default class TasksList extends Component<any,{tasks: ITask[]}> {
  taskAddingInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props)

    this.taskAddingInputRef = React.createRef()

    this.state = {
      tasks: []
    }
  }

  generateRandomID = (): number => {
    let ID = ''
    
    for (let i = 0; i < 5; i++) {
      ID += Math.floor(Math.random() * (9 - 1 + 1)) + 1
    }

    return Number(ID)
  }

  handleAddTask = (title: string) => {
    if (!title) return

    const generateTaskID = (): number => {
      const generatedID = this.generateRandomID()

      if(this.state.tasks.find(task=> task.ID === generatedID)) return generateTaskID()

      return Number(generatedID)
    }

    this.setState({...this.state, tasks:[...this.state.tasks, {
      ID: generateTaskID(),
      title,
      isComplete: false
    }]})
  }

  render = ()=> (
    <section className="tasks-list">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            ref={this.taskAddingInputRef}
          />
          <button type="submit" onClick={()=> this.handleAddTask(this.taskAddingInputRef.current?.value || '')}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
        {this.state.tasks.map(task => (
            <li key={task.ID}>
              <div className={task.isComplete ? 'completed' : ''}>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button">
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}
