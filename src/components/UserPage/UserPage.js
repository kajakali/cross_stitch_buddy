import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import LogOutButton from '../LogOutButton/LogOutButton';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 400,
    },
    button: {
      color: 'primary'
    }
  });

class UserPage extends Component {

  componentDidMount() {
    //TODO figure out if I want anything from the database here... but right now I don't this.props.dispatch( {type: 'FETCH_CURRENT_PROJECT', payload: {project_id: this.props.match.params.id}} );
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
      <h1 id="welcome">
        Welcome, { this.props.reduxStore.user.username }!
      </h1>
      <p>Your ID is: { this.props.reduxStore.user.id }</p>
      <Button
        onClick={() => this.props.history.push('/projectslist')}
        color='primary'
        variant='contained'
        >
        Projects
      </Button>
      <Button
        onClick={() => this.props.history.push('/threadlist')}
        color='primary'
        variant='contained'
      >
        Threads
      </Button>
  
      <LogOutButton className={classes.button} />
    </div>
    );
  }
}


  


const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(UserPage)));

