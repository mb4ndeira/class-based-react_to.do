import React, { Component }from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import './styles.scss'

interface ITask {
  id: number;
  title: string;
  isComplete: boolean;
}

export default class TasksList extends Component<any,{tasks: ITask[]}> {
  constructor(props: any) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  render = ()=> (
    <section className="tasks-list">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            value=""
          />
          <button type="submit">
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
        {this.state.tasks.map(task => (
            <li key={task.id}>
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
