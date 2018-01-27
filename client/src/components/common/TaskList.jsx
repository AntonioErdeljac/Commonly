import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import agent from '../../agent';
import TaskCard from './TaskCard';
import { Input } from '../common';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeValue(value, key) {
    const { onChangeValue } = this.props;
    onChangeValue(key, value);
  }

  handleSubmit(ev) {
    const { submitTask, info, time } = this.props;
    ev.preventDefault();

    submitTask(agent.Tasks.new(info, time));
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <div className="c-card text-center">
            <form onSubmit={this.handleSubmit}>
              <h6>Create a new task</h6>
              <Input
                className="c-split-form-input"
                label="Info"
                name="info"
                hideLabel
                onChange={this.changeValue}
                placeholder="Enter task info"
              />
              <Input
                className="c-split-form-input"
                label="Time"
                name="time"
                hideLabel
                onChange={this.changeValue}
                placeholder="Enter task time"
                type="time"
              />
              <button type="submit" className=" my-3 btn btn-primary btn-lg form-control">Submit</button>
            </form>
          </div>
        </div>
        {
        tasks.map(task => (
          <TaskCard key={Math.random()} icon={task.icon} info={task.info} time={task.time} />
        ))
      }
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.editor,
  ...state.tasks,
});

const mapDispatchToProps = dispatch => ({
  onChangeValue: (key, value) =>
    dispatch({ type: 'UPDATE_FIELD_NEW_TASK', key, value }),
  submitTask: payload =>
    dispatch({ type: 'ADD_TASK', payload }),
});

TaskList.defaultProps = {
  info: null,
  time: null,
};

TaskList.propTypes = {
  submitTask: PropTypes.func.isRequired,
  info: PropTypes.string,
  time: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
