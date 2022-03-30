import React, { Component } from 'react'

import Header from './components/Header';
import TasksList from './components/TasksList';

import './styles/global.scss'
export default class App extends Component {
  render = () => (
    <>
      <Header />
      <TasksList />
    </>
  );
}