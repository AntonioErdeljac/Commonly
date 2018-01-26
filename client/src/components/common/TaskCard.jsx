import PropTypes from 'prop-types';
import React from 'react';

const TaskCard = (props) => {
  const { info, time, icon } = props;
  return (
    <div className="col-4">
      <div className="c-card text-center">
        <i className={`fa fa-${icon} icon-card color-blue`} />
        <hr />
        <p>{info}</p>
        <p className="text-muted mt-3">{time}</p>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  icon: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default TaskCard;
