import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LogOutButton from '../LogOutButton/LogOutButton';


const styles = theme => ({
    root: {
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      justifyContent: 'center',
      display: 'block',
      margin: 'auto',
    },
  });

class UserPage extends Component {

  componentDidMount() {
    //TODO maybe get the projects list and show their images here...
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
      <h1 id="welcome">
        Welcome, { this.props.reduxStore.user.username }!
      </h1>
      <p>Your ID is: { this.props.reduxStore.user.id }</p>
      <div classes={{root: classes.root}}>
        <img src='http://www.artecyshop.com/images/medium/dolphinsatdawn_MED.jpg' alt='dolphins at dawn'/>
      </div>
      <Button
        classes={{root: classes.root}}
        onClick={() => this.props.history.push('/projectslist')}
        color='primary'
        variant='contained'
        >
        Projects
      </Button>
      <Button
        classes={{root: classes.root}}
        onClick={() => this.props.history.push('/threadlist')}
        color='primary'
        variant='contained'
      >
        Threads
      </Button>
  
      <LogOutButton className={`${classes.button} ${classes.root}`} />
    </div>
    );
  }
}


  


const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(UserPage)));

