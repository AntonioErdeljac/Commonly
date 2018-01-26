import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { TaskList } from '../common';

const tasks = [{
  icon: 'shopping-cart',
  info: 'test',
  time: 'test',
}];

const Home = (props) => {
  const { currentUser } = props;
  return (
    <div className="container">
      <h5>{currentUser.username}{'\'s'} tasks</h5>
      <TaskList tasks={tasks} />
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.common,
});

Home.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(Home);
