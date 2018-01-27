import PropTypes from 'prop-types';
import React from 'react';

import TaskCard from './TaskCard';

const TaskList = (props) => {
  const { tasks } = props;
  return (
    <div className="row">
      <div className="col-4">
        <div className="c-card text-center">
          <i className="fa fa-plus add-new-card icon-card color-blue" />
        </div>
      </div>
      {
        tasks.map(task => (
          <TaskCard icon={task.icon} info={task.info} time={task.time} />
        ))
      }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf.isRequired,
};

export default TaskList;
