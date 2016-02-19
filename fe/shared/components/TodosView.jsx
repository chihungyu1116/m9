import React         from 'react';
import { PropTypes } from 'react';
import Immutable     from 'immutable';

export default class TodosView extends React.Component {
  static propTypes = {
    todos:      PropTypes.instanceOf(Immutable.List).isRequired,
    editTodo:   PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  handleDelete = (e) => {
    const id = Number(e.target.dataset.id);

    this.props.deleteTodo(id);
  };

  handleEdit = (e) => {
    const id         = Number(e.target.dataset.id);
    const currentVal = this.props.todos.get(id);

    let text = window.prompt('', currentVal);
    this.props.editTodo(id, text);
  };

  render() {
    return (
      <div id="todos-list">
        {
          this.props.todos.map((todo, index) => {
            return (
              <div key={index}>
                <span>{index} {todo}</span>
                <button data-id={index} onClick={this.handleDelete}>X</button>
                <button data-id={index} onClick={this.handleEdit}>Edit</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}