import PropTypes from 'prop-types';
import React from 'react';

import TaskCard from './TaskCard';

const TaskList = (props) => {
  const { tasks } = props;
  return (
    <div className="row">
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
