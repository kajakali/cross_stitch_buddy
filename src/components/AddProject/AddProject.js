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

class AddProject extends Component {

    componentDidMount() {
        //this.props.dispatch( {type: 'FETCH_STRINGS', payload: {project_id: this.props.match.params.id}} );
    }

    addStringButton = () => {
        console.log('add this string!');
    }

    backToListButton = () => {
        this.props.history.push('/projectslist');
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1>Add Project Page!!!</h1>

                <p> this page will let you make a new project
                </p>

                {JSON.stringify(this.props)}


    
{/*       <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell align="right">Amount Required</TableCell>
            <TableCell align="right">Amount Available</TableCell>
            <TableCell align="right">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

                
                {this.props.stringsNeeded.length > 0 && this.props.stringsNeeded.map(item => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.number}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={this.addStringButton}>Add New Project</Button></TableCell>
      
                  </TableRow>
                ))}
 
                <TableRow key='add'>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell><Button variant="contained">Mark Project Complete</Button></TableCell>
                </TableRow>
              </TableBody>
      </Table> */}
<Button variant="contained" onClick={this.backToListButton}>Back to Projects List</Button>
            </div>
        );
    }
}

AddProject.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(AddProject)));
