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


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class ProjectsList extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'FETCH_NEEDED_STRINGS', payload: {project_id: this.props.match.params.id}} );
    }

    editStringButton = () => {
        console.log('edit this string!');
    }

    backToListButton = () => {
        this.props.history.push('/projectslist');
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1>Individual Project Page</h1>
                {JSON.stringify(this.props.match.params.id)}
                <p> this page will display the strings for one project
                </p>

                {JSON.stringify(this.props.stringsNeeded)}


    
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell align="right">Amount Required</TableCell>
            <TableCell align="right">Amount Available</TableCell>
            <TableCell align="right">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

                
                {this.props.reduxStore.stringsNeeded.length > 0 && this.props.reduxStore.stringsNeeded.map(item => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.number}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={this.editStringButton}>Edit String</Button></TableCell>
      
                  </TableRow>
                ))}
 
                <TableRow key='add'>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell><Button variant="contained" onClick={this.completeProjectButton}>Mark Project Complete</Button></TableCell>
                </TableRow>
              </TableBody>
      </Table>
<Button variant="contained" onClick={this.backToListButton}>Back to Projects List</Button>
            </div>
        );
    }
}

ProjectsList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({stringsNeeded}) => ({ stringsNeeded });
const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(ProjectsList)));
