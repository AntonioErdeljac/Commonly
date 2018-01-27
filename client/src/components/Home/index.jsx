import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import agent from '../../agent';
import { TaskList } from '../common';

// const tasks = [{
//   icon: 'shopping-cart',
//   info: 'test',
//   time: 'test',
// }];

class Home extends React.Component {
  componentWillMount() {
    this.props.loadTasks(agent.Tasks.all());
  }
  render() {
    const { currentUser, onLogout, tasks } = this.props;
    return (
      <div className="container">
        <h5>{currentUser.username}{'\'s'} tasks <i onClick={onLogout} className="fa fa-sign-out color-red" /></h5>
        <TaskList tasks={tasks || []} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.common,
  ...state.tasks,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () =>
    dispatch({ type: 'LOGOUT' }),
  loadTasks: payload =>
    dispatch({ type: 'LOAD_TASKS', payload }),
});

Home.defaultProps = {
  tasks: null,
};

Home.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  onLogout: PropTypes.func.isRequired,
  loadTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
