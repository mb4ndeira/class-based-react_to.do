import React, { Component }from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import './styles.scss'

export default class TasksList extends Component {
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
            <li key="1">
              <div className="" >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={false}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>Única tarefa</p>
              </div>

              <button type="button">
                <FiTrash size={16} />
              </button>
            </li>
        </ul>
      </main>
    </section>
  )
}
